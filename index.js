import express from 'express';
import cors from 'cors';
import connection from './dataBase.js';

const app = express();
app.use(cors());


connection()
app.listen(5000, () => console.log('App running on port 5000'))










