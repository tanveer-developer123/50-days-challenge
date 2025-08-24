import express,{Request, Response} from 'express';


const app = express;
const PORT = 5000;

app.get('/', (req:Request, res:Response)=>{
    res.send("Home pgae is Ready")
});

app.listen(PORT, ()=>{
    console.log(`Server is Running on localhost:${PORT}`)
})