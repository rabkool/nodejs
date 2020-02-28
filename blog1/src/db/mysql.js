const mysql = require('mysql')

const { MYSQL_CONF } = require('../conf/db')

// 创建对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始链接
con.connect()

// 统一执行sql
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if(err) {
                resolve(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec
}



