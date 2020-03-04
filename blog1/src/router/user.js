const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const hadleUserRouter = (req, res) => {
    const method = req.method

    // 登入
    if (method === 'POST' && req.path === '/api/login') {
        const { username, password } = req.body
        // const { username, password } = req.query
        const result = login(username, password)
        return result.then(data => {
            if (data.username) {
                // 设置session值
                req.session.username = data.username
                req.session.realname = data.realname

                console.log('req.session is ', req.session)
                // 同步到 redis
                set(req.sessionId, req.session)

                return new SuccessModel()
            }
            return new ErrorModel('login失敗')
        })
    }

    if (method === 'GET' && req.path === '/api/logintest') {
        if(req.session.username) {
            return Promise.resolve(
                new SuccessModel({
                    // 返回session
                    session: req.session    
                })
            )
        }
        return Promise.resolve(new ErrorModel('未login'))
    }
}

module.exports = hadleUserRouter