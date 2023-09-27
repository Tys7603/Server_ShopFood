const colection = require('./connection')

module.exports = {
    getAllFood : (callBack) => {
        colection.query("SELECT * FROM food",
        (err , result) => {
            if(err){
                callBack({status : "ERORR" , err})
            }else{
                callBack({status : "SUCCESS" , foodList : result})
            }
        })
    }
    ,
    getAllFoodbyId : (id,callBack) => {
        colection.query("SELECT * FROM food WHERE idCategory = ?",
        [id],
        (err , result) => {
            if(err){
                callBack({status : "ERORR" , err})
            }else{
                if(result.length > 0){
                    callBack({status : "SUCCESS" , foodList : result})
                }else{
                    callBack({status : "NOT FOUND" , foodList : result})
                }
            }
        })
    }
    ,
    // them food vao cart
    insertFoodToCart : (idFood, quantity, idUser, callBack) => {
        colection.query("INSERT INTO cart (idFood, quantity, idUser) VALUE ( ? , ? , ?)",
        [idFood, quantity, idUser],
        (err , result) => {
            if(err){
                callBack({status : "ERORR" , err})
            }else{
                callBack({status : "SUCCESS" })
            }
        })
    }

    ,
    // delete cart
    deleteFoodToCart : (id, callBack) => {
        colection.query("DELETE FROM cart WHERE id = ?",
        [id],
        (err , result) => {
            if(err){
                callBack({status : "ERORR" , err})
            }else{
                if(result.affectedRows > 0){
                    callBack({status : "SUCCESS"})
                }else{
                    callBack({status : "NOT FOUND"})
                }
            }
        })
    }
    ,
    deleteAllFoodToCart : (email,callBack) => {
        colection.query("DELETE FROM cart WHERE idUser = ?",
        [email],
        (err) => {
            if(err){
                callBack({status : "ERORR" , err})
            }else{
                callBack({status : "SUCCESS"})
            }
        })
    }
    ,
    //
    //SELECT orders.order_id, customers.customer_nameFROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id;
   
    getFoodToCart : (email,callBack) => {
        const query = "SELECT cart.id, cart.quantity, cart.idUser, food.name, food.price, food.image " +
        "FROM cart INNER JOIN food ON cart.idFood = food.id WHERE cart.idUser = ?";
        colection.query(query,
        [email],
        (err , result) => {
            if(err){
                callBack({status : "ERORR" , err})
            }else{
                if(result.length > 0){
                    callBack({status : "SUCCESS", cartList : result})
                }else{
                    callBack({status : "NOT FOUND", cartList : result})
                }
            }
        })
    }
    ,
    // update cart
    updateFoodToCart : (id, quantity, callBack) => {
        colection.query("UPDATE cart SET quantity = ? WHERE id = ?",
        [quantity,id],
        (err , result) => {
            if(err){
                callBack({status : "ERORR" , err})
            }else{
                if(result.changedRows > 0){
                    callBack({status : "SUCCESS"})
                }else{
                    callBack({status : "NOT FOUND"})
                }
            }
        })
    }
}