import jwt from "jsonwebtoken";
import { config } from "dotenv";
// require('dotenv').config()
config();
const { ACCESS_TOKEN_SECRED, REFRESH_TOKEN } = process.env;
export const generateAccessToken = (user) => {
  return jwt.sign({ user }, ACCESS_TOKEN_SECRED, { expiresIn: "15h" });
};
export const createPerson = async (req, res) => {
  const { name, email, date } = req.body;
  await userSchema.create({ name, email, date });
  res.send("user created successfully");
};
export const login = async (req, res) => {
  const { un, pw } = req.body;
  if (un !== "gow" || pw !== "123")
    res.json({ success: false, msg: "login Failed" });
  const accessToken = generateAccessToken(un);
  const refreshToken = jwt.sign(un, REFRESH_TOKEN);
  const resObj = { success: true, accessToken, refreshToken };
  res.status(200).json(resObj);
};

export const getAccessfromRefreshToken = (req, res) => {
  const { refresh_token, un } = req.body;
  jwt.verify(refresh_token, REFRESH_TOKEN, (err, user) => {
    if (err) res.sendStatus(403);
    const accessToken = generateAccessToken(un);
    res.status(200).json({ error: false, accessToken });
  });
};
