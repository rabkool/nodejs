const loginCheck = (username, password) => {
    if (username === 'rabkool' && password === '123') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}