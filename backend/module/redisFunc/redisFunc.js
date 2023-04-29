const Redis = require('ioredis');
const dotenv = require('dotenv')
dotenv.config()

const client = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    // password: process.env.REDIS_PASSWORD,
});

const redisFunc = {
    async readRedisPointsValue(pointsTitle) {
        const keys = await client.keys(pointsTitle + '*');
        const results = {};
    
        await Promise.all(keys.map(async (key) => {
            const fields = await client.hgetall(key);
            results[key] = fields;
        }));
    
        return results;
    },
    // 存入refresh token並設置ttl = 30 day
    async setJwtRefreshToken(userId, refreshToken) {
        await client.multi()
            .hset(userId, 'refreshToken', refreshToken)
            .expire(userId, 30 * 24 * 60 * 60) // 30 天的秒數
            .exec();
    },
    // 比對refresh token
    async checkJwtRefreshToken(userId, refreshToken) {
        const redisRefreshToken = await client.hget(userId, 'refreshToken')
        if (redisRefreshToken !== refreshToken) {
            return false
        } else {
            return true
        }
    },
    // 去除refresh token
    async deleteJwtRefreshToken(userId) {
        await client.del(userId)
    }
}

module.exports = redisFunc