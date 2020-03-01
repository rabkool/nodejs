const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取cookie 过期时间
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    return d.toGMTString()
}

const hadleUserRouter = (req, res) => {
    const method = req.method

    // 登入
    if (method === 'GET' && req.path === '/api/login') {
        // const { username, password } = req.body
        const { username, password } = req.query
        const result = login(username, password)
        return result.then(data => {
            if (data.username) {
                /**
                 * path=/: 所有path下
                 * httpOnly: 只允许后端来改
                 * expires=${getCookieExpires()}: 设置过期时间
                 */
                res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
                return new SuccessModel()
            }
            return new ErrorModel('login失敗')
        })
    }

    if (method === 'GET' && req.path === '/api/logintest') {
        if(req.cookie.username){
            return Promise.resolve(
                new SuccessModel({
                    username: req.cookie.username
                })
            )
        }
        return Promise.resolve(new ErrorModel('未login'))
    }
}

module.exports = hadleUserRouter