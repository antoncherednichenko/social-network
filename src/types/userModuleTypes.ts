
export interface ICaptcha {
    url: string
    isCaptcha: boolean
}

export interface IUserModule {
    email: string,
    login: string,
    password: string,
    userID: number | null,
    isAuth: boolean, 
    captcha: ICaptcha
}

export interface IUser {
    email: string,
    password: string,
    captcha?: string
}