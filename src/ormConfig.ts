import { ConnectionOptions } from 'typeorm'

// Default ormCcnfig, by connection with databse
const connectionOptions: ConnectionOptions  = {
    type: 'postgres', // type connection
    database: 'nuber', // database name
    synchronize: true, // synchronize 
    logging: true, 
    entities: [ 'entities/**/*.*' ], // watching by entities app
    host: process.env.DB_ENDPOINT || 'localhost', 
    port: 5432, // port database
    username:  process.env.DB_USERNAME || 'MaridiM',
    password: process.env.DB_PASSWORD || ''
}

export default connectionOptions