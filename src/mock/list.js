import Mock from 'mockjs'
import { getUrlParams } from '@/util'

const mockList = []
const total = Mock.mock('@integer(60, 178)')

for (let i = 0; i < total; i++) {
  mockList.push(
    Mock.mock({
      'number|1000000-9999999': 1234567,
      'name': Mock.mock('@cword(`零一二三四五六七八九十`, 3)'),
      'origin|1': [
        '北京',
        '上海',
        '广州'
      ],
      'date': Mock.mock('@date')
    })
  )
}

const list = Mock.mock(/api\/getList/, 'get', options => {
  const currentPage = getUrlParams(options.url, 'currentPage')
  const pageSize = getUrlParams(options.url, 'pageSize')
  if (currentPage) {
    const pages = Math.ceil(total / pageSize)
    const list = mockList.filter((item, index) =>
      index < pageSize * currentPage && index >= pageSize * (currentPage - 1))
    return {
      code: 0,
      message: 'OK',
      data: {
        currentPage,
        total, // 总条数
        pageSize, // 一页显示的条数
        pages, // 总页数
        list
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

export default {
  list
}
