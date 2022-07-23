import { rootConstants } from "@/store/storeConst"
import { ActionContext } from "vuex"

export interface IRootState {
   
}

export interface ISetObj<T> {
    path: string,
    value: T
}

export type TRootMutations<S = IRootState> = {
    [rootConstants.SET_OBJECT_VALUE]<T>(state: S, payload: ISetObj<T>): void
}

export type TActionContext  = {
    commit<K extends keyof TRootMutations>(
        key: K, 
        payload: Parameters<TRootMutations[K]>[1]
    ): ReturnType<TRootMutations[K]>
} & Omit<ActionContext<IRootState, IRootState>, 'commit'>

export interface IRootActions {
    [rootConstants.DISPATCH_OBJECT_VALUE]<T>({ commit }: TActionContext, payload: ISetObj<T>): void
}