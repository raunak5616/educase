import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/profileRoutes.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/profiles',router);
app.get('/',(req,res)=>{
    res.send('Hello World');
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
