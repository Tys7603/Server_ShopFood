const colection = require('./connection')

module.exports = {
    login : (email, password, callBack) => {
        colection.query("SELECT * FROM user WHERE email = ? AND password = ?",
        [email, password],
        (err , result) => {
            if(err){
                callBack({status : "ERORR" , err})
            }else{
                if(result.length > 0){
                    callBack({status : "SUCCESS" , user : result[0]})
                }else{
                    callBack({status : "NOT FOUND"})
                }
            }
        })
    }
    ,
    register : (email, password, avatar, name, sdt, address, role, callBack) => {
        colection.query("INSERT INTO user(email, password, avatar, name, sdt, address, role) VALUE (? , ? , ? , ? , ? , ?, ?)" ,
        [email, password, avatar, name, sdt, address, role],
        (err) => {
            if(err){
                callBack({status : "ERORR", err})
            }else{
                callBack({status : "SUCCESS"})
            }
        })
    }
    ,
    updateInforProfile : (email, password, name, callBack) => {
        colection.query("UPDATE user SET password = ?, name = ? WHERE email = ?"  ,
        [password, name, email],
        (err,result) => {
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
    ,
    updateContacProfile : (email, sdt, address, callBack) => {
        colection.query("UPDATE user SET  sdt = ?, address = ? WHERE email = ?"  ,
        [sdt, address, email],
        (err,result) => {
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
    ,
    updateAvatarProfile : (email, avatar, callBack) => {
        colection.query("UPDATE user SET  avatar = ? WHERE email = ?"  ,
        [avatar, email],
        (err,result) => {
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