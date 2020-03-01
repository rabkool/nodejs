const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const hadleUserRouter = (req, res) => {
    const method = req.method

    // 登入
    if (method === 'POST' && req.path === '/api/login') {
        const { username, password } = req.body
        const result = loginCheck(username, password)
        return result.then(data => {
            if (data.username) {
                return new SuccessModel()
            }
            return new ErrorModel('login失敗')

        })
    }
}

module.exports = hadleUserRouter