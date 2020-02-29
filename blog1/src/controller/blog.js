const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    // 返回数据
    let sql = `select * from blogs where 1=1 ` 
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    return exec(sql)
}

const getDetail = (id) => {
    const sql = `select * from blogs where id = '${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const createtime = Date.now()
    const author = blogData.author

    const sql = `
        insert into blogs (title, content, createtime, author)
        values ('${title}', '${content}', ${createtime}, '${author}');
    `
    return exec(sql).then(insertData => {
        console.log(insertData)
        return {
            id: insertData.insertId
        }
    })
}

const updateBlog  = (id, blogData = {}) => {
}

const delBlog  = (id) => {
   
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}