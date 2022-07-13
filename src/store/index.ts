import { IRootState } from '@/types/rootStateTypes'
import { createStore } from 'vuex'

import rootState from './rootState'




export default createStore<IRootState>(rootState)
