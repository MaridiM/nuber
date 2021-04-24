export const paths = {
    home: '/',
    phoneLogin: '/phone-login',
    verifyPhone: '/verify-phone',
    socialLogin: '/social-login',
    ride: (id?: string):string =>  id ? `/ride/${id}` : '/ride/:rideId',
    chat: (id?: string):string =>  id ? `/chat/${id}` : '/chat/:chatId',
    editAccount: '/edit-account',
    settings: '/settings',
    places: '/places',
    addPlace: '/add-place',
    findAddress: '/find-address',
}