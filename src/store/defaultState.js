export default {
  get UserToken () {
    return localStorage.getItem('token')
  },
  set UserToken (value) {
    localStorage.setItem('token', value)
  },
  get photo () {
    return localStorage.getItem('photo')
  },
  set photo (value) {
    localStorage.setItem('photo', value)
  },
  get username () {
    return localStorage.getItem('username')
  },
  set username (value) {
    localStorage.setItem('username', value)
  }
}