require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).send("No Auth Header.");
    } else {
      console.log(authHeader);
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          return res
            .status(403)
            .send({ code: "AUTH_ERROR", message: "Error authenticating token" });
        } else {
          user.expiresIn = "2h";
          req.user = user;
          let accessToken = jwt.sign(
            { id: user.id, grant: user.grant },
            process.env.SECRET_KEY,
            { expiresIn: user.expiresIn }
          );
          res.header("X-REFRESH-TOKEN", accessToken); //previous: res.header("Authorization", "Bearer " + accessToken);
          next();
        }
      });
    }
  };
  