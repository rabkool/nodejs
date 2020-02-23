const handleBlogRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    console.log(path)
    // 获取列表
    if (method === 'GET' && path === '/api/blog/list') {
        return {
            msg: '列表接口'
        }
    }

    // 获取详情
    if (method === 'GET' && path === '/api/detail') {
        return {
            msg: '获取详情'
        }
    }
    
    // 建立
    if (method === 'POST' && path === '/api/new') {
        return {
            msg: '新建'
        }
    }

    // 更新
    if (method === 'POST' && path === '/api/update') {
        return {
            msg: '更新'
        }
    }

    // 删除
    if (method === 'POST' && path === '/api/delete') {
        return {
            msg: '删除'
        }
    }    
}

module.exports = handleBlogRouter