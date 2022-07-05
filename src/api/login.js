import admin from '../utils/request'

export const getCodes = () => {
  return admin({ url: '/captcha', method: 'GET' })
}

export const getLogin = (data) => {
  return admin({
    url:`/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method:'POST'
  })
}
