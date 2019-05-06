import request from '@/lib/request'

const login = param => request.post('api/login', param)

const getUserInfo = param => request.get('api/getUserInfo', { params: param })

const logout = param => request.post('api/getUserInfo', param)

export {
  login,
  getUserInfo,
  logout
}
