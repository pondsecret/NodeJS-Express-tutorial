const express = require('express')
const path = require('path')

// Call express as app 
const app = express()
// Create an server port 
const PORT = process.env.PORT
const host = 'localhost'

app.use(express.static(path.join(__dirname,'/public/')))

app.set('views','./src/views')
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT,host,()=>{
    console.log(`Strat server on '${host}:${PORT}`)
})