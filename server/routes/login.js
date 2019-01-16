const express         = require("express")
const loginController = require("../controllers/login")
const router          = express.Router()
//    POST
router.post("/", loginController.loginPost)
//
module.exports = router
