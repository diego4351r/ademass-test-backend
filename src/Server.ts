import express, {type Application} from 'express'
import AuthRouter from './routes/auth'
import cors from 'cors'
class Server {
  app: Application;
  port = process.env.PORT || 3000;

  constructor(){
    this.app = express()
    this.app.use(cors())
    this.app.use( express.json() )

    this.app.use( AuthRouter )
  }

  start(){
    this.listen()
  }

  listen(){
    this.app.listen(this.port, () => console.log(`server listening on port ${this.port}`))
  }
}

export const server = new Server()