const bcrypt = require('bcrypt');

const saltRounds = 10;
const secureToken = process.env.SECURE_TOKEN;

module.exports = {
    async encryptSession(req, res) {
        const { session } = req.body

        bcrypt.hash(session + secureToken, saltRounds, function (err, hash) {
            if (err) {
                return res.status(400).json(err)
            }

            return res.status(201).json(hash)
        });
    }
}