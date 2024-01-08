const express = require("express");
const chats = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/userRoutes');
const chatRoutes = require('./Routes/chatRoutes');
const messageRoutes = require('./Routes/messageRoutes')
const{notFound,errorHandler} = require('./middleWare/errorMiddleWare');
const userInvitation = require('./Routes/userInvitation');

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Api is Running")
})

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)
app.use('/api/message',messageRoutes);
app.use('/api/invite', userInvitation);


app.use(notFound);
app.use(errorHandler);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const PORT = process.env.PORT || 8000;



app.listen(PORT,console.log(`Server Started on port ${PORT}`));