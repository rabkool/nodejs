const hadleUserRouter = (req, res) => {
    const method = req.method

    // 登入
    if (method === 'POST' && req.path === '/api/login') {
        return {
            mgs: '登入'
        }
    }
}

module.exports = hadleUserRouter