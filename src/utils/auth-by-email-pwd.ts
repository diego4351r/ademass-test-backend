import { USERS_DB } from "../database/Users";
import type { User } from "../interfaces/User";

export const authByEmailPwd = (email: string, password: string): User => {
  const user = USERS_DB.find(user => user.email === email)

  if (!user || user.password !== password) throw new Error()
  
  return user

}