const express = require('express')
const app = express()

const port = 3000


app.get('/',(req,res)=>{
    res.send(`<h1 style="color: darkcyan; background: lightgray;">iPOND Studio</h1>`)
})

app.listen(3000,'localhost',()=>{
    console.log(`Strat server on 'localhost:${port}`)
})