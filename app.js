const express = require('express')
const path = require('path')

// Call express as app 
const app = express()
// Create an server port 
const port = 3000
const host = 'localhost'

app.use(express.static(path.join(__dirname,'/public/')))

app.set('views','./src/views')
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.send(`<h1 style="color: darkcyan; background: lightgray;">iPOND Studio</h1>`)
})

app.listen(3000,host,()=>{
    console.log(`Strat server on '${host}:${port}`)
})