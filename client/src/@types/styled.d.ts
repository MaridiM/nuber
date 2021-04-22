// Core
import 'styled-components'

declare module 'styled-components' {
    export interface IDefaultTheme {
        borderRadius: string

        colors: {
            primary: string
            secondary: string
            
        }
    }
}

