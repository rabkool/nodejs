const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'index.html'})
    res.end('<h1> hello world </h1>')
})

// 游览器访问 http://http://localhost:8080/
server.listen(8080, () => {
    console.log('listening on 8080 port')
})