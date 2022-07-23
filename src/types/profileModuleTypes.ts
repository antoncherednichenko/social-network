
export type TContacts = { [key: string]: string }

export interface IPhotos {
    small: string
    large: string
}

export interface IEditModal {
    isModal: boolean
}

export interface IProfile {
    aboutMe: string
    currentUserID: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string,
    contacts: TContacts | null
    photos: IPhotos | null
    isLoading: boolean,
    editModal: IEditModal
}