const express = require('express')

const app = express()

const PORT = 4000 || process.env.PORT

app.get("/", (req, res) =>{
    res.status(200).send("<h1>Hello Amit</h1>")
})


app.get("/api/v1/instagram",(req,res) => {
    const instaSocial = {
        username : "amityadav0912",
        followers : 126,
        follows : 147,
        date : Date.now()
    }
    res.status(200).json({instaSocial});
})

app.get("/api/v1/linkedin",(req,res) => {
    const instaSocial = {
        username : "amityadav",
        followers : 300,
        follows : 50,
        date : Date.now()
    }
    res.status(200).json({instaSocial});
})

app.get("/api/v1/facebook",(req,res) => {
    const instaSocial = {
        username : "Amit Yadv",
        followers : 100,
        follows : 50,
        date : Date.now()
    }
    res.status(200).json({instaSocial});
})

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
})

app.listen(PORT,()=> {
    console.log(`Server is running at ${PORT} `)
})