// Core
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import session from 'express-session'
import helmet from 'helmet'
import logger from 'morgan'
import path from 'path'

// Config
import { corsOptions, sessionOptions } from './config'
// Read Token
import { readToken } from './readToken'

// Init express app
const app: Application = express()

// Middleware
app.use(cors(corsOptions))
app.use(session(sessionOptions))
app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }))
app.use(logger('dev'))


// Middleware for reading token 
app.use(readToken)

// Send static on production 
if(process.env.NODE_ENV === 'production') {
    app.use(express.static((path.join(__dirname, '../../', 'client', 'dist'))))
    app.get('*', (req: Request, res: Response, next: NextFunction) => {
        res.sendFile(path.join(__dirname, '../../', 'client', 'dist', 'index.html'))
    })
}

// Endpoint express app
export { app }