import express from 'express';

import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js'
import connectToMongoDb from './db/connectToMongoDB.js';

const app = express();

dotenv.config();

app.use(express.json()); // parse application/json
app.use(cookieParser()); // 

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

//app.get("/", (req, res) => {
    // base de la route http://localhost:3000/
    //res.send("Hello World!!!");
//})

app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Le server tourne sur ${PORT}`)
});