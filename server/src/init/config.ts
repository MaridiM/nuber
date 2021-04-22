// Core
import { PoolConfig } from 'pg'
import { ConnectionOptions } from 'typeorm'

// Types
import { 
    SessionOptions,
    CorsOptions
} from './../types/config.d';


// Config server 
export const PORT: number | string = process.env.SERVER_PORT || 8888

// Session config
export const sessionOptions: SessionOptions = {
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
export const corsOptions: CorsOptions = {
    origin: `http://${process.env.CLIENT_HOST}`,
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


// Default ormCcnfig, by connection with databse
export const connectionOptions: ConnectionOptions  = {
    // type connection
    type: 'postgres', 
    // database name
    database: 'nuber', 
    // synchronize with database (automatically)
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

