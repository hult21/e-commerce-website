import dotenv from 'dotenv'
dotenv.config();

import express  from "express";
import apiRouter from './routes/routes.js'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000


app.use(cors());

app.use(express.json())
app.use('/api', apiRouter);


app.listen(port, () => {
    console.log (`Server is running on http://localhost:${port}`)
});