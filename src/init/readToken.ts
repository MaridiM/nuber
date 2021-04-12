// Core
import { Response, NextFunction } from 'express'
// import jwt from 'jsonwebtoken' 

// Utils
import decodeJWT from './../utils/decodeJWT'

export const readToken = async (
    req, 
    res: Response, 
    next: NextFunction
): Promise<void> => {
    const token = req.get('X-JWT')

    if(token) {
        const user = await decodeJWT(token)
        if(user) {
            req.user = user
        } else {
            req.user = undefined
            
        }
    }

    // const { token } = req.session && req.session

    // if( token ) {
    //     const { fullname, email, phone } = jwt.verify(token, process.env.SESSION_SECRET)
    //     req.user = { email, phone, fullname}
    // }
    next()
} 