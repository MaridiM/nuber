// Core
import { ConnectionOptions } from 'typeorm'


// TS Types
type TCookie = {
    httpOnly: boolean,
    maxAge: number
}
interface ISession {
    key: string,
    secret: string | string[],
    resave: boolean,
    rolling: boolean,
    saveUninitialized: boolean,
    cookie: TCookie
}
interface ICors {
    origin: string,
    credentials: boolean
}

// Config server 
export const PORT: number | string = process.env.PORT || 8888

// Session config
export const sessionOptions: ISession = {
    key: 'token',
    secret: process.env.SESSION_SECRET || "dfhgdiuerh4389kjsdvn4839hf34kj434h5lk",
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 24 * 60 * 1000 // 24h
    }   
}

// CORS config
export const corsOptions: ICors = {
    origin: `http://localhost:${PORT}`,
    credentials: true // for set cookie on client from server
}

// Default ormCcnfig, by connection with databse
export const connectionOptions: ConnectionOptions  = {
    // type connection
    type: 'postgres', 
    // database name
    database: 'nuber', 
    // synchronize
    synchronize: true,  
    // Started to  transition
    logging: true, 
    // watching by entities app
    entities: [ 'entities/**/*.*' ],
    host: process.env.DB_ENDPOINT, 
    port: 5432, 
    username:  process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}