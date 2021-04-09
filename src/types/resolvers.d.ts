 export type Resolver = (parent: unknown, args: unknown, context: unknown, info: unknown) => void

 export interface Resolvers {
    [key: string]: { // Query {}
        [key: string]: Resolver // method query
    }
 }