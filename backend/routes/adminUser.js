const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userQuery = require('../module/queryFunc/userQuery.js')
const hashFunc = require('../module/hashFunc/hashFunc.js')
const redisFunc = require('../module/redisFunc/redisFunc.js')
const jwtTokenFunc = require('../module/jwtTokenFunc/jwtTokenFunc.js')

router.get('/',async (req, res, next) => {
    res.send('ok')
})

// login
router.post('/login', async (req, res, next) => {
    try {
        const { account, password } = req.body 

        const result = await userQuery.selectAdminUserContent(account)
        const id = result[0]["id"]
        const title = result[0]["title"]
        const hashKey = result[0]["hash_key"]
        const hashSalt = result[0]["hash_salt"]
        
        const userCheck = hashFunc.compareStringToHash(password, hashSalt, hashKey)

        if (userCheck) {
            const user = { id: id, title: title }
            const accessToken = jwtTokenFunc.generateAccessToken(user)
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
            await redisFunc.setJwtRefreshToken(id, refreshToken)

            res.status(200).json({ accessToken, refreshToken })
        } else {
            res.sendStatus(404)
        }
    } catch (e) {
        next(e)
    }
})

// logout
router.delete('/logout', async (req, res, next) => {
    try {
        const refreshToken = req.body.token 

        if (refreshToken === null) return res.sendStatus(401)

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
            if (err) return res.sendStatus(403)

            await redisFunc.deleteJwtRefreshToken(user.id)
            res.sendStatus(204)
        })
    } catch (e) {
        next(e)
    }
})

// 確認jwt token 有無過期，如果有，回傳一個新的token
router.post('/checkToken', async (req, res, next) => {
    const refreshToken = req.body.refreshToken // refresh token
    const jwtToken = req.body.jwtToken // jwt token

    // 如果沒有傳入則退回
    if (!jwtToken || !refreshToken) {
        return res.status(401).send({ message: 'Missing token' });
    }

    try {

        const decodedToken = jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET) // 解析jwt token
        return res.status(200).send({ message: 'Token not expired' }) // 如果沒有錯誤就回傳status 200

    } catch (error) {

        // 解析錯誤，判斷錯誤是否為token過期
        if (error instanceof jwt.TokenExpiredError) {

            // 解析refresh token
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {

                // 如果解析錯誤，移除此使用者在redis中的refresh token
                if (err) {
                    await redisFunc.deleteJwtRefreshToken(user.id)
                    return res.status(401).send({ message: 'Invalid token' })
                }

                // 確認此refresh token是否與redis中的refresh token一樣
                const checkToken = await redisFunc.checkJwtRefreshToken(user.id, refreshToken)
                // 如果不相符則移除redis中的資料
                if (!checkToken) {
                    await redisFunc.deleteJwtRefreshToken(user.id)
                    return res.status(401).send({ message: 'Invalid token' })
                }

                // 如果都沒問題，就創建新的jwt token並回傳
                const accessToken = jwtTokenFunc.generateAccessToken({ id: user.id, lv: user.lv })
                res.status(201).send({ accessToken })
            })
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).send({ message: 'Invalid token' })
        } else {
            next(error)
        }
    }
})

module.exports = router