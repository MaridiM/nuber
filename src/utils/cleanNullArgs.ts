const cleanNullArgs = (args: object, isSQL: boolean = false): object | string => {
    const notNull: object = {}
    Object.keys(args).forEach(key => {
        if(args[key] !== null) {
            notNull[key] = args[key]
        } 
    }) 

    if(isSQL) {
        const sqlArgs: string[] = []
        Object.keys(notNull).forEach(key => {
            sqlArgs.push(`"${key}" = '${notNull[key]}'`)
        })

        return sqlArgs.join(', ')
    }

    return notNull
} 

export default cleanNullArgs