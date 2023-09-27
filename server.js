const express = require('express')
const app = express()
const body_parser = require('body-parser')

const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended : true}))

app.use(userRouter)
app.use(foodRouter)

app.listen(3000)