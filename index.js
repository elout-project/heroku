const express = require('express')

const app = express()
app.get('/',(req,res)=>{
    res.send('Hello world, sugeng sonten !')
})

app.listen(3300,()=>console.log('Server running http://localhost:3000'))
