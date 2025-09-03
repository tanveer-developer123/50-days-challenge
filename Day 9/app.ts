import express from 'express'

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send("Server is Home Page")
})

app.get('/about', (req,res)=>{
    res.send('Server is About Page')
})

app.listen(PORT , ()=>{
    console.log(`Server is Running on Localhost:${PORT}`)
})