const fs = require('fs')
const path = require('path')

// // __dirname：当前目录 全局变量 
// const fullFileName = path.resolve(__dirname, 'files', 'a.json')
// fs.readFile(fullFileName, (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(data.toString())
// })

// callback 方法
// function getFileContent(fileName, callback) {
//     const fullFileName = path.resolve(__dirname, 'files', fileName)
//     fs.readFile(fullFileName, (err, data) => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         callback(
//             JSON.parse(data.toString())
//         )
//     })
// }

// // callback-hell
// getFileContent('a.json', aData => {
//     console.log('a.json', aData)
//     getFileContent(aData.next, bData => {
//         console.log('b.json', bData)
//         getFileContent(bData.next, cData => {
//             console.log('c.json', cData)
//         })
//     })
// })

// promise 
function getFileContent(fileName) {
    const promise = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', fileName)
        fs.readFile(fullFileName, (err, data) => {
            if(err) {
                reject(err)
                return
            }
            resolve(
                JSON.parse(data.toString())
            )
        })
    })
    return promise
}

getFileContent('a.json').then(aData => {
    console.log('a.json', aData)
    return getFileContent(aData.next)
}).then(bData => {
    console.log('b.json', bData)
    return getFileContent(bData.next)
}).then(cData => {
    console.log('c.json', cData)
})