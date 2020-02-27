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
        const listData = getList(author, keyword)

        return new SuccessModel(listData)
    }

    // 获取详情
    if (method === 'GET' && req.path === '/api/detail') {
        const data = getDetail(id)

        return new SuccessModel(data)
    }

    // 建立
    if (method === 'POST' && req.path === '/api/new') {
        const blogData = newBlog(req.body)
        return new SuccessModel(blogData)
    }

    // 更新
    if (method === 'POST' && req.path === '/api/update') {
        const result = updateBlog(id, req.body)
        if (result){
            return new SuccessModel()
        } else {
            return new ErrorModel('更新失敗')
        }
    }

    // 删除
    if (method === 'POST' && req.path === '/api/delete') {
        const result = delBlog(id)
        if (result){
            return new SuccessModel()
        } else {
            return new ErrorModel('削除失敗')
        }
    }    
}

module.exports = handleBlogRouter