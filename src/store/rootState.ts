import { StoreOptions } from 'vuex'
import { set } from 'lodash'

import { IRootState } from '@/types/rootStateTypes'

import api from '@/modules/apiModule'

interface ISetObj<T> {
    path: string,
    value: T
}

const rootState: StoreOptions<IRootState> = {
    state: {
    },
    mutations: {
        setObjectValue(state, setObj: ISetObj<any>) {
            const { path, value } = setObj
            set(state, path, value)
        }
    },
    actions: {
        dispatchObjectValue({ commit }, setObj: ISetObj<any>) {
            commit('setObjectValue', setObj)
        }
    },
    modules: {
        api
    }
}


export default rootState