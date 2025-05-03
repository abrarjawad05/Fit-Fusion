const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/UserRoutes')


require('dotenv').config()
const PORT = process.env.PORT || 3500
const mongoString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@fitfusion.bl3ruao.mongodb.net/?retryWrites=true&w=majority&appName=FitFusion`

app.use(cors());
app.use(express.json())

mongoose.connect(mongoString)
.then (() => console.log("Database connected"))
.catch((err) => console.error(err));

// Routes
app.use('/api/user', userRoutes);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})