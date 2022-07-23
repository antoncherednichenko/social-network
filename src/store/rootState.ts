import { Module, StoreOptions } from 'vuex'
import { set } from 'lodash'

import { IRootState, ISetObj } from '@/types/rootStateTypes'

import api from '@/modules/apiModule'
import userModule from '@/modules/userModule'
import profileModule from '@/modules/profileModule'
import { IProfile } from '@/types/profileModuleTypes'



const rootState: Module<IRootState, IRootState> = {
    mutations: {
        setObjectValue(state: IRootState, setObj: ISetObj<any>) {
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
        user: userModule,
        profile: profileModule as Module<IProfile, IRootState>
    }
}


export default rootState