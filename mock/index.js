const express = require('express')
const app = express()
const adminLogin = require('./data/admin_login.json')
const vipLogin = require('./data/vip_login.json')
const url = require('url')

app.get('/login', (req, res) => {
  console.log(req, res)
  const user = url.parse(req.url, true).query.user
  if (user === 'admin') {
    res.send(adminLogin)
  } else {
    res.send(vipLogin)
  }
})

app.listen(3300, () => {
  console.log('服务器运行在3300')
})
