import axios from '../utils/http'

export function login (user) {
  return axios.get("/api/login?user=" + user)
}
