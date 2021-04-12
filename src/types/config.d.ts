// TS Types

// Cookies options type
export type CookieOptions = {
    httpOnly: boolean,
    maxAge: number
}

// Session options type
export type SessionOptions = {
    key: string,
    secret: string | string[],
    resave: boolean,
    rolling: boolean,
    saveUninitialized: boolean,
    cookie: TCookie
}

// Cors options type
export type CorsOptions = {
    origin: string,
    credentials: boolean
}