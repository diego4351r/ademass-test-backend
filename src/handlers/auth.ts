import { Router, type Request, type Response } from "express";
import jwt from 'jsonwebtoken'
import type { User } from "../interfaces/User";
import type { UserDto } from "../dtos/user.dto";
import generateShortId from "ssid";
import cors from 'cors'

export const authHandler = (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.warn('auth')
  if (!email || !password) res.sendStatus(400);

  const ssid = generateShortId()

  const _user: User = {
    uid: ssid,
    name: 'randomName',
    email: email
    
  }

  const token = jwt.sign(_user, process.env.SECRET_KEY || 'secretkey', { expiresIn: "1h" })

  const user: UserDto = {
    ..._user,
    authToken: token
  };

  res.status(200).send(user)

};