export default {
  LOGIN_IN (state, token) {
    state.UserToken = token
  },
  LOGIN_OUT (state) {
    state.UserToken = ''
    state.photo = ''
    state.username = ''
  },
  SET_PHOTO (state, photo) {
    state.photo = photo
  },
  SET_USERNAME (state, username) {
    state.username = username
  }
}