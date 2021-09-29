const express = require('express')
const app = express()

const PORT = 3010

app.get('/',(req,res)=>{res.json({H:"Welcome to app-1"})})

app.listen(PORT,()=>{console.log('Welcome to app-1')})