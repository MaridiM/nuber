const resolvers= {
    Subscription: {
        DriversSubscription: {
            subscribe: (_, __, { pubSub }) => {
                // Set asyncIterator with name chanel
                return pubSub.asyncIterator('driverUpdate')
            } 
        }
    }
}

export default resolvers  