const express = require('express');
const { loginUser } = require('../controller/UserController');
const app = express();
const router = express.Router();

//Routes
app.post('/create', createUser);
app.get('/', loginUser);
app.get('/getUser', authMiddleware, getUser);
app.put('/update', authMiddleware, updateUser);
app.delete('/delete', authMiddleware, deleteUser);


// Export the router
module.exports = router;


