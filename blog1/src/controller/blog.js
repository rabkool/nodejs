const getList = (author, keyword) => {
    // 返回数据
    return [
        {
            id: 1,
            title: 'title A',
            content: 'content A',
            createTime: 1,
            author: 'A'
        },
        {
            id: 2,
            title: 'title B',
            content: 'content B',
            createTime: 1,
            author: 'B'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: 'getDetail',
        content: 'getDetail A',
        createTime: 1,
        author: 'A'
    }
}

module.exports = {
    getList,
    getDetail
}