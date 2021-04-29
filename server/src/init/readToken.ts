// Core
import { NextFunction, Response } from 'express'

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
    
    next()
} 