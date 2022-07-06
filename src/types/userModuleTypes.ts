
export interface ICaptcha {
    url: string
    isCaptcha: boolean
}

export interface IUserModule {
    email: string,
    login: string,
    password: string,
    userID: number, 
    captcha: ICaptcha
}

export interface IUser {
    email: string,
    password: string,
    captcha?: string
}