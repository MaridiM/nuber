// Core
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const readToken = (
    req:Request, 
    res:Response, 
    next:NextFunction
): void => {
    // const { token } = req.session && req.session

    // if( token ) {
    //     const { fullname, email, phone } = jwt.verify(token, process.env.SESSION_SECRET)
    //     req.user = { email, phone, fullname}
    // }
    next()
} 