
export interface ICaptcha {
    url: string
    isCaptcha: boolean
}

export interface IUserModule {
    login: string,
    isAuth: boolean 
    captcha: ICaptcha
}

export interface IUser {
    login: string,
    password: string
}