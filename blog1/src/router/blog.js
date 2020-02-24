const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method

    // 获取列表
    if (method === 'GET' && req.path === '/api/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)

        return new SuccessModel(listData)
    }

    // 获取详情
    if (method === 'GET' && req.path === '/api/detail') {
        return {
            msg: '获取详情'
        }
    }

    // 建立
    if (method === 'POST' && req.path === '/api/new') {
        return {
            msg: '新建'
        }
    }

    // 更新
    if (method === 'POST' && req.path === '/api/update') {
        return {
            msg: '更新'
        }
    }

    // 删除
    if (method === 'POST' && req.path === '/api/delete') {
        return {
            msg: '删除'
        }
    }    
}

module.exports = handleBlogRouter