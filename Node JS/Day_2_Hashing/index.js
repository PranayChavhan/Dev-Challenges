import express from 'express';
import crypto from 'crypto';


const port = 3000;
const app = express();

const hash = crypto.createHash('sha1');

const data = hash.update('data', 'utf-8');

const gen_hash = data.digest('hex');


app.get('/', (req, res)=>{
    // res.send("Hello world Day 2");
    res.send(`hash : ${gen_hash}`);
})

app.listen(port, ()=>{
    console.log(`Server is started at http://localhost:${port}`);
})