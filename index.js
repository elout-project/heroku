const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3300
const app = express()

app.get('/about',(req,res)=>{
    res.send('His is my first deployment to heroku, very statisfiying . Thank heroku')
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname +'/srt-resume.html'))
})

app.use('/',(req,res)=>{
    res.send('404 Error, Not found')
})

app.listen(PORT,()=>console.log('Server running http://localhost:3300'))
