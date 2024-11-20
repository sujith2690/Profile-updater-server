import express from 'express';
import cors from 'cors';
import connection from './dataBase.js';
import authRoute from "./routes/authRoute.js"


const app = express();
app.use(cors());
app.use(express.json());


connection()
app.listen(5000, () => console.log('App running on port 5000'))



app.use('/auth', authRoute)







