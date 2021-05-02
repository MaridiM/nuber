// Utils
import { paths } from "./../@utils"
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
            document.location.pathname = paths.home
        }
    }
    const logout = (): void => {
        localStorage.removeItem('jwt')
        isAuth(false)
        document.location.pathname = paths.home
    } 
    return { 
        authentication,
        logout,
        isAuth: isAuth()
    }
}