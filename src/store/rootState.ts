import { Module, StoreOptions } from 'vuex'
import { set } from 'lodash'

import { IRootState, ISetObj } from '@/types/rootStateTypes'

import api from '@/store/modules/apiModule'
import userModule from '@/store/modules/userModule'
import profileModule from '@/store/modules/profileModule'
import { IProfile } from '@/types/profileModuleTypes'
import { rootConstants } from './storeConst'



const rootState: Module<IRootState, IRootState> = {
    mutations: {
        [rootConstants.SET_OBJECT_VALUE](state: IRootState, setObj: ISetObj<any>) {
            const { path, value } = setObj
            set(state, path, value)
        }
    },
    actions: {
        [rootConstants.DISPATCH_OBJECT_VALUE]({ commit }, setObj: ISetObj<any>) {
            commit(rootConstants.SET_OBJECT_VALUE, setObj)
        }
    },
    modules: {
        api,
        user: userModule,
        profile: profileModule as Module<IProfile, IRootState>
    }
}


export default rootState