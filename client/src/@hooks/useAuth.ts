// Init
import { isAuth } from "./../@init"

// Types
interface IAuthFn {
    authentication: (token: string) => void
    logout: () => void
    readonly isAuth: boolean
}

export const useAuth = (): IAuthFn => {
    const authentication = (token: string): void => {
        if (token) {
            localStorage.setItem('jwt', token)
            isAuth(true)
        }
    }
    const logout = (): void => {
        localStorage.remove('jwt')
        isAuth(false)
    } 
    return { 
        authentication,
        logout,
        isAuth: isAuth()
    }
}