// Core 
import { GraphQLSchema } from 'graphql'
import { IResolvers} from 'apollo-server-express'
import { loadFilesSync } from '@graphql-tools/load-files'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'

// Read all *.graphql, *.resolvers.* files  from  ./api
const allTypes: GraphQLSchema[] = loadFilesSync('./api/**/*.graphql')
const allResolvers: IResolvers[] = loadFilesSync('./api/**/*.resolvers.*')

// Merged all data in
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs(allTypes),
    resolvers: mergeResolvers(allResolvers),
})

export default schema 