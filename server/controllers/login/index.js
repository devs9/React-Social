const { REGEXPS } = require('../../constants')
//    POST
exports.loginPost = async (req, res, next) => {
  try {
    const { email, password } = req.body
    console.log(email, password)

    if (email === 'gm9ge0rge@gmail.com' && password === '55555') {
      res.send({ status: 'ok', data: { id: 1 } })
    } else if (REGEXPS.email.test(email)) {
      res.send({ status: 'err', message: 'wrong login' })
    } else if (password.length <= 5) {
      res.send({ status: 'err', message: 'wrong ps' })
    }
  } catch (e) {
    console.log('login ERROR' ,e)
    res.send({ status: 'err', message: '500 internal server error' })
  }
}
