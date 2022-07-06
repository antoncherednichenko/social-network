export interface IApiModule {
    baseUrl: string
}

export interface IRequestSettings {
    method: string,
    type: string,
    data?: ISettingsData
}

interface ISettingsData {
    email?: string,
    password?: string
}