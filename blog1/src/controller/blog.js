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

}

const newBlog = (blogData = {}) => {
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