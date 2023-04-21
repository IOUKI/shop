const jwt = require('jsonwebtoken')

const jwtTokenFunc = {
    // token 驗證
    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })
    },
    // create token
    generateAccessToken(user) {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' })
    },
    // get user id
    getUserId(token) {
        const decoded = jwt.decode(token);
        return decoded ? decoded.id : null;
    },
}

module.exports = jwtTokenFunc