import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

import { IRootState } from '@/types/rootStateTypes'

import rootState from './rootState'

export const key: InjectionKey<Store<IRootState>> = Symbol()


const store = createStore<IRootState>(rootState)

export default  store
