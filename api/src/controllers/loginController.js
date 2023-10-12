

const {User} = require('../db.js');



const loginController = async (req, res) => {
    const { email, password } = req.query;
    if (!email || !password) {
        res.status(400).json({ message: 'missing data' });
    } else {
        try {
        const user = await User.findOne({
            where: { email },
        });
        if (!user) {
            res.status(404).json({ message: 'user not found' });
            
        } else {
            if (user.password !== password) {
            res.status(403).json({ message: 'incorrect password' });
            } else {
            res.status(200).json({ access: true });
            }
        }
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    }
    };
    

 





module.exports = loginController;