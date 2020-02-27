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

const newBlog = (blogData = {}) => {
    // blogData 是一个对象 包含 title content 属性
    console.log('newBlog data...', blogData)
    return {
        id: 3 
    }
}

const updateBlog  = (id, blogData = {}) => {
    // blogData 是一个对象 包含 title content 属性
    console.log('updataBlog data...', id, blogData)
    
    return true
}

const delBlog  = (id) => {
    console.log('delBlog data...', id)

    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}