const mysql = require('mysql')

// 创建链接对象
const con = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: 'rabkool',
    port: '3306',
    database: 'myblog'
})

// 链接数据库
con.connect()


// const sql = 'select * from users;'
// const sql = `update users set realname='rab' where username='rabkool';`
// const sql = `INSERT INTO myblog.blogs (title, content, createtime, author) VALUES ('titleC', 'contentC', '222222222', 'rabkooool')`;

con.query(sql, (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
})

// 关闭
con.end()