// Core
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

// Init
import './init/app'
import { PORT, connectionOptions } from './init/config'
import { server } from './init/server'
import { graphqlPath, subscriptionsPath } from './init/apolloServer'

// Create PostgreSQL connection with orm and  after start servers
createConnection(connectionOptions).then(() => {
    server.listen(PORT, (): void => {
        console.log(`✔️ Server ready at http://localhost:${PORT}${graphqlPath}`)
        console.log(`✔️ Subscriptions ready at http://localhost:${PORT}${subscriptionsPath}`)
    })
})

