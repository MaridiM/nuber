 export type Resolver = (parent: any, args: any, context: any, info: any) => void

 export interface Resolvers {
    [key: string]: { // Query {}
        [key: string]: Resolver // method query
    }
 }