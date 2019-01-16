const jwt = require("jsonwebtoken");
const CONST = require("../constants");
const { PORT, URL_DB, secret } = CONST;
//
module.exports = (req, res, next) => {
  //
  if (
    req.hasOwnProperty("headers") &&
    req.headers.hasOwnProperty("authorization")
  ) {
    try {
      req.user = jwt.verify(req.headers["authorization"], secret);
    } catch (err) {
      return res.status(401).json({
        error: {
          msg: "Failed to authenticate token!"
        }
      });
    }
  } else {
    return res.status(401).json({
      error: {
        msg: "No token!"
      }
    });
  }
  next();
  return;
};
