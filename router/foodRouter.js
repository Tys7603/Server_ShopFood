const express = require('express')
const database = require('../database/foodDatabase')
const app = express()

app.post("/getList-food", (req, res) => {
    database.getAllFood(result => {
        res.json(result)
    })
})

app.post("/getList-byId-food", (req, res) => {
    const {id} = req.body
    database.getAllFoodbyId(id,result => {
        res.json(result)
    })
})

app.post("/insert-cart", (req, res) => {
    const {idFood, quantity, idUser} = req.body
    database.insertFoodToCart(idFood, quantity, idUser, result => {
        res.json(result)
    })
})

app.post("/delete-cart", (req, res) => {
    const {id} = req.body
    database.deleteFoodToCart(id, result => {
        res.json(result)
    })
})

app.post("/deleteAll-byEmail-cart", (req, res) => {
    const {email} = req.body
    database.deleteAllFoodToCart(email, result => {
        res.json(result)
    })
})

app.post("/update-cart", (req, res) => {
    const {id, quantity} = req.body
    database.updateFoodToCart(id, quantity, result => {
        res.json(result)
    })
})

app.post("/getFood-cart", (req, res) => {
    const {email} = req.body
    database.getFoodToCart(email, result => {
        res.json(result)
    })
})
module.exports = app