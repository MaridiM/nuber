// Core
import { PoolConfig } from 'pg'
import { ConnectionOptions } from 'typeorm'

// Types
import { 
    CorsOptions,
    SessionOptions
} from './../types/config.d';


// Config server 
export const PORT: number | string = process.env.SERVER_PORT || 8888

// Session config
export const sessionOptions: SessionOptions = {
    key: 'token',
    secret: process.env.SESSION_SECRET || '',
    resave: false, // important so that the session is not overwritten for every sneeze
    rolling: true,
    saveUninitialized: false, // needed to serve cookies even to an unauthorized user
    cookie: {
        httpOnly: true,
        secure: true, // obliges to transfer via ssl
        maxAge: 60 * 24 * 60 * 1000, // 24h
        sameSite: `${process.env.CLIENT_PROTOCOL_URL}://${process.env.CLIENT_HOST}` // so that you can send to different subdomains
    }   
}

// CORS config
export const corsOptions: CorsOptions = {
    origin: `${process.env.CLIENT_PROTOCOL_URL}://${process.env.CLIENT_HOST}`,
    credentials: true // for set cookie on client from server
}

// Default pg, by connection with PostgreSQL
export const PGPoolConfig: PoolConfig = {
    database: 'nuber', 
    user:  process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_ENDPOINT, 
    port: 5432, 
    // idleTimeoutMillis: 30000,
    // connectionTimeoutMillis: 2000, 
    max: 99
  }


// Default ormConfig, by connection with database
export const connectionOptions: ConnectionOptions  = {
    // type connection
    type: 'postgres', 
    // database name
    database: 'nuber', 
    // synchronize with database (automatically)
    synchronize: true,  
    // Started to  transition
    logging: false, 
    // watching by entities app
    entities: [ 'entities/**/*.*' ],
    host: process.env.DB_ENDPOINT, 
    port: 5432, 
    username:  process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}

