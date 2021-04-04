import { SeyByeResponse, QueryByeArgs } from './../../../types/graph';

const resolvers = {
    Query: {
        bye: (_, args:  QueryByeArgs,) : SeyByeResponse => {
            return {
                error: false,
                text:  `Bye ${args.name}`
            }
        }
    }
}

export default resolvers