import { StoreOptions } from 'vuex'
import { IRootState } from '@/types/rootStateTypes'

import api from '@/store/modules/apiModule'
import userModule from '@/store/modules/userModule'
import profileModule from '@/store/modules/profileModule'

import mutations from './rootMutations'
import actions from './rootActions'



const rootState: StoreOptions<IRootState> = {
    mutations,
    actions,
    modules: {
        api,
        user: userModule,
        profile: profileModule
    }
}


export default rootState