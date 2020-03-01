const { 
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method
    // 获取id
    const id = req.query.id

    // 获取列表
    if (method === 'GET' && req.path === '/api/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author, keyword)
        // return new SuccessModel(listData)
        const result = getList(author, keyword)
        return result.then(ListData => {
            return new SuccessModel(ListData)
        })
    }

    // 获取详情
    if (method === 'GET' && req.path === '/api/detail') {
        // const data = getDetail(id)
        // return new SuccessModel(data)
        const result = getDetail(id)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // 建立
    if (method === 'POST' && req.path === '/api/new') {
        // const blogData = newBlog(req.body)
        // return new SuccessModel(blogData)
        req.body.author= 'rabkool'
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // 更新
    if (method === 'POST' && req.path === '/api/update') {
        const result = updateBlog(id, req.body)
        return result.then(val => {
            if(val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('更新失敗')
            }
        })
    }

    // 删除
    if (method === 'POST' && req.path === '/api/delete') {
        const author= 'rabkool'
        const result = delBlog(id, author)
        return result.then(val =>{
            if(val){
                return new SuccessModel()
            }else {
                return new ErrorModel('更新失敗')
            }
        })
    }    
}

module.exports = handleBlogRouter