import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const { ACCESS_TOKEN_SECRED } = process.env;
export const authentication = (req, res, next) => {
  const temp = req.headers["authorization"];
  console.log("req token", req.headers);
  console.log("temp", temp);
  const token = temp.split(" ")[1];
  console.log("token", token);

  if (!token) res.send(401);
  jwt.verify(token, ACCESS_TOKEN_SECRED, (err, user) => {
    if (err) res.send(403);
    req.user = user;
    next();
  });
};
