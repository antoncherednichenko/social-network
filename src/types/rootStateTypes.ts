import { ActionContext } from "vuex"

export interface IRootState {
   
}

export interface ISetObj<T> {
    path: string,
    value: T
}
