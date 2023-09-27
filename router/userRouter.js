const express = require('express')
const database = require('../database/userDatabase')
const app = express()

app.post("/login-user", (req, res) => {
    const {email, password} = req.body
    database.login(email, password, result => {
        res.json(result)
    })
})

app.post("/register-user", (req, res) => {
    const role = "user"
    const avatar = ""
    const sdt = ""
    const address = ""
    const {email, password, name} = req.body
    database.register(email, password, avatar, name, sdt, address, role, result => {
        res.json(result)
    })
})

app.post("/update-information-user", (req, res) => {
    const {email, password, name} = req.body
    database.updateInforProfile(email, password, name, result => {
        res.json(result)
    })
})
app.post("/update-contact-user", (req, res) => {
    const {email, sdt, address} = req.body
    database.updateContacProfile(email, sdt, address, result => {
        res.json(result)
    })
})
app.post("/update-avatar-user", (req, res) => {
    const {email, avatar} = req.body
    database.updateAvatarProfile(email, avatar, result => {
        res.json(result)
    })
})
module.exports = app