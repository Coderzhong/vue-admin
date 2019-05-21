import request from '@/lib/request'

const getList = param => request.get('api/getList', { params: param })

export {
  getList
}
