import { StoreOptions } from 'vuex'
import { set } from 'lodash'

import { IRootState, ISetObj } from '@/types/rootStateTypes'

import api from '@/modules/apiModule'
import userModule from '@/modules/userModule'



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
        api,
        user: userModule
    }
}


export default rootState