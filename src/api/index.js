import axios from '../utils/http'
import store from '../store'

export function login (user) {
  console.log(user)
  return axios.get("/api/login?user=" + user)
}
