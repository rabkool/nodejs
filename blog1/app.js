const handleBlogRouter = require('./src/router/blog')
const hadleUserRouter = require('./src/router/user')

const serverHandle = (req, res) => {
    // 设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')
    // env: process.env.NODE_ENV

    // blog 路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    // user路由
    const userData = hadleUserRouter(req, res)
    if (userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    // 404
    res.writeHead(404, {'Content': 'text/plain'})
    res.write('404 Not Found\n')
    res.end()
}

module.exports = serverHandle

