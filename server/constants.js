const config = {
  PORT: 3333,
  secret: 'jwtSecret',
  URL_DB: 'mongodb://localhost:27017/app',
  URL_USERS: 'http://localhost:3001/api/users',
}
const REGEXPS = {
  name: /^[A-Za-z]{1,32}$/,
  surname: /^[A-Za-z]{1,32}$/,
  middleName: /^[A-Za-z]{1,32}$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  age: /^[1-9][0-9]?$/,
}
const URLS = {
  LOGIN: '/api/login'
}
//
module.exports = {
  config,
  REGEXPS,
  URLS
}
