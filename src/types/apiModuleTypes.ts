export interface IApiModule {
    baseUrl: string
}

export interface IRequestSettings {
    method: string,
    type: string,
    data?: ISettingsData
}

interface ISettingsData {
    login?: string,
    password?: string
}