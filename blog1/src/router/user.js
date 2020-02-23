const hadleUserRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    // 登入
    if (method === 'POST' && path === '/api/login') {
        return {
            mgs: '登入'
        }
    }
}

module.exports = hadleUserRouter