import { PubSub } from 'apollo-server-express'
// PubSub using for subscriptions and publish in graphql
const pubSub: any = new PubSub()
pubSub.ee.setMaxListeners(99)  // raise max listeners in event emitter

export default pubSub
