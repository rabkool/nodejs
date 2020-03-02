const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const hadleUserRouter = require('./src/router/user')


// 获取cookie 过期时间
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    return d.toGMTString()
}

// session数据
const SESSION_DATA = {} 

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

    // cookie
    req.cookie = {}
    const cookieStr = req.headers.cookie || ''
    cookieStr.split(';').forEach(item => {
        if (!item){
            return
        }
        const arr = item.split('=')
        const key = arr[0].trim()
        const val = arr[1].trim()
        req.cookie[key] =val
    })
    console.log('cookie', req.cookie)

    // session
    let needSetCookie = false
    let userId = req.cookie.userid
    if (userId) {
        if (!SESSION_DATA[userId]) {
            SESSION_DATA[userId] = {}
        } 
    } else {
        needSetCookie = true
        userId = `${Date.now()}_${Math.random()}`
        SESSION_DATA[userId] = {}
    }
    req.session = SESSION_DATA[userId]

    // 処理 post data
    getPostData(req).then(postData => {
        req.body = postData

    // blog 路由
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
        blogResult.then(blogData =>{
            if (needSetCookie){
                /**
                 * path=/: 所有path下
                 * httpOnly: 只允许后端来改
                 * expires=${getCookieExpires()}: 设置过期时间
                 */
                res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
            }

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
    // const userData = hadleUserRouter(req, res)
    // if (userData) {
    //     res.end(
    //         JSON.stringify(userData)
    //     )
    //     return
    // }

    const userResult= hadleUserRouter(req, res)
    if (userResult){
        userResult.then(userData => {
            if (needSetCookie){
                /**
                 * path=/: 所有path下
                 * httpOnly: 只允许后端来改
                 * expires=${getCookieExpires()}: 设置过期时间
                 */
                res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
            }

            res.end(
                JSON.stringify(userData)
            )    
        })
        return
    }

    // 404
    res.writeHead(404, {'Content': 'text/plain'})
    res.write('404 Not Found\n')
    res.end()
    })
}

module.exports = serverHandle

