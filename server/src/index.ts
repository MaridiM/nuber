// Core
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
dotenv.config({ path: '../.env' })

// Init
import './init/app'
import { graphqlPath, subscriptionsPath } from './init/applyMiddleware'
import { connectionOptions, PORT } from './init/config'
import './init/db'
import { server } from './init/server'


// Create PostgreSQL connection with typeorm and  after start servers
createConnection(connectionOptions).then(() => {   
    server.listen(PORT, (): void => {
        console.log(`✔️ Server ready at http://localhost:${PORT}${graphqlPath}`)
        console.log(`✔️ Subscriptions ready at http://localhost:${PORT}${subscriptionsPath}`)
    })
})