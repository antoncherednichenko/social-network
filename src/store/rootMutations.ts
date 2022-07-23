import { set } from "lodash";

import { IRootState, ISetObj, TRootMutations } from "@/types/rootStateTypes";
import { MutationTree } from "vuex";
import { rootConstants } from "./storeConst";

const mutations: MutationTree<IRootState> & TRootMutations = {
    [rootConstants.SET_OBJECT_VALUE]<T>(state: IRootState, payload: ISetObj<T>) {
        const { path, value } = payload
        set(state, path, value)
    }
}

export default mutations