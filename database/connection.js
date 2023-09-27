const mysql = require('mysql')
const conlection = mysql.createConnection({
    host: "185.42.117.115",
    user : "ufoyfrdrh7ykoyyn",
    password : "r3qJ0aeqrqoxmbGbqHko",
    database : "btslwaevby3fswdr8fqq",
    port : 3306
})

conlection.connect(err => {
    if (!err) {
        console.log("Database is connect")
    }else{
        console.log("Database don't connect")
    }
})

module.exports = conlection