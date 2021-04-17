// Reexport 
export { default as SQL }from './SQL'

// Core
import { Pool, Client } from 'pg'

// Config
import { PGPoolConfig } from './../config'


export const pool: Pool = new Pool(PGPoolConfig) 


;(async function () {
    const client: Client = new Client(PGPoolConfig)
    await client.connect()

    const result = await client.query(`SELECT * FROM "user"`)
    console.log(result.rows)

    client.end()
})()
