const jwt = require("jsonwebtoken");

exports.auth =
  ({ block }) =>
  (req, res, next) => {
    const token = req.header("authorization");
    jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
      if (error && block) return res.sendStatus(401);
      res.locals.user = payload;
      next();
    });
  };
