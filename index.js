const express = require('express')

const PORT = process.env.PORT || 3300
const app = express()

app.get('/about',(req,res)=>{
    res.send('His is my first deployment to heroku, very statisfiying . Thank heroku')
})
app.get('/',(req,res)=>{
    res.sendFile("https://elout-project.herokuapp.com/srt-resume.html")
})

app.use('/',(req,res)=>{
    res.send('404 Error, Not found')
})

app.listen(PORT,()=>console.log('Server running http://localhost:3300'))
