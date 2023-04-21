const crypto = require('crypto');

const hashFunc = {
    // create salt
    createSalt() {
        const characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:"<>?-=[]\\;\',./`;
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    // hash key + salt
    hashString(str, salt) {
        const hash = crypto.createHmac('sha256', salt)
            .update(str)
            .digest('hex');
        return hash;
    },
    // 驗證hash
    compareStringToHash(str, salt, hash) {
        const inputHash = crypto.createHmac('sha256', salt)
            .update(str)
            .digest('hex');
        return inputHash === hash;
    }
}

module.exports = hashFunc