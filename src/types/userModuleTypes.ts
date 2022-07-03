
export interface ICaptcha {
    url: string
    isCaptcha: boolean
}

export interface IUserModule {
    login: string,
    password: string,
    isAuth: boolean,
    userID: number, 
    captcha: ICaptcha
}

export interface IUser {
    login: string,
    password: string,
    captcha?: string
}