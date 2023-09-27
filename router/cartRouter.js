const express = require('express')
const database = require('../database/foodDatabase')
const app = express()

app.post("/getList-food", (req, res) => {
    database.getAllUser(result => {
        res.json(result)
    })
})

// app.post("/register-user", (req, res) => {
//     const role = "user"
//     const {email, password, name, sdt, address} = req.body
//     database.register(email, password, name, sdt, address, role, result => {
//         res.json(result)
//     })
// })
module.exports = app