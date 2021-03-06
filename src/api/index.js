import axios from '../utils/http'
import store from '../store'

export function login (user) {
  return axios.get("/api/login?user=" + user)
}

export function fetchPermission () {
  return axios.get('/api/permission?user=' + store.state.UserToken)
}

export function getUserInfo (token) {
  return axios.get('/api/userinfo?user=' + token)
}
