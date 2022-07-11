
export interface IContacts {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    wevsite: string
    youtube: string
    mainLink: string
}

export interface IPhotos {
    small: string
    large: string
}

export interface IProfile {
    aboutMe: string
    currentUserID: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string,
    contacts: IContacts | null
    photos: IPhotos | null
    isLoading: boolean
}