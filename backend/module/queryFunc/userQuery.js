const queryFunc = require('./queryFunc.js')

// user query
const userQuery = {
    async selectUserHashKeyAndSalt(account) {
        const sqlQuery = `
            SELECT id, hash_key, hash_salt, lv_id 
            FROM user_main 
            WHERE account = '${account}';
        `
        const result = queryFunc.selectStuff(sqlQuery)
        return result
    },
    async selectAdminUserContent(account) {
        sqlQuery = `SELECT id, title, hash_key, hash_salt 
                    FROM admin_user 
                    WHERE account = "${account}";`
        const result = queryFunc.selectStuff(sqlQuery)
        return result
    }
}

module.exports = userQuery