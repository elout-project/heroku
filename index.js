const express = require('express')

const PORT = process.env.PORT || 3300
const app = express()
app.get('/',(req,res)=>{
    res.send('<h2>Hello world, sugeng sonten !</h2>')
})

app.listen(PORT,()=>console.log('Server running http://localhost:3300'))
