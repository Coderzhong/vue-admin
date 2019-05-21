import Mock from 'mockjs'

Mock.mock(/api\/list/, 'post', options => {
  const { username } = JSON.parse(options.body)
  if (username) {
    return {
      code: 0,
      message: 'OK',
      data: {
        currentPage: 1,
        total: 15, // 总条数
        pageSize: 10, // 一页显示的条数
        pages: 2, // 总页数
        list: [
          { id: 110, name: '我是110', age: 20 },
          { id: 119, name: '我是119', age: 21 }
        ]
      }
    }
  } else {
    return {
      code: 110,
      message: '查询错误',
      data: {}
    }
  }
})
