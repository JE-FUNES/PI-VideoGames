const {User} = require('../db');



    const postUserController = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (email && password) {
                await User.findOrCreate({ where: { email:email, password:password }, defaults: { email, password } });
                return res.status(200).json('registered successfully!')
            }
            return res.status(400).json('missing data')
    
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    };

module.exports = postUserController;
