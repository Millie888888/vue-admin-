import admin from '../utils/request'

export const getCods = () => {
  return admin({ url: '/captcha', method: 'GET' })
}

export const getLogin = (data) => {
  return admin({ url: '', method: 'POST', data })
}