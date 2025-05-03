require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
module.exports = authMiddleware;