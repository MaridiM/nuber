import { pool } from './'

const SQL: any = async (query: string): Promise<any> => {
    const res = await pool.query(query)
    
    return res.rows
}

export default SQL