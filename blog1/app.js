const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const hadleUserRouter = require('./src/router/user')

// 処理 post data
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () =>{
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    // 设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')
    // env: process.env.NODE_ENV

    const url = req.url
    req.path = url.split('?')[0]

    // query
    req.query = querystring.parse(url.split('?')[1])

    // 処理 post data
    getPostData(req).then(postData => {
        req.body = postData

    // blog 路由
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
        blogResult.then(blogData =>{
            res.end(
                JSON.stringify(blogData)
            )
        })
        return
    }

    // const blogData = handleBlogRouter(req, res)
    // if (blogData) {
    //     res.end(
    //         JSON.stringify(blogData)
    //     )
    //     return
    // }

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
    })
}

module.exports = serverHandle

