import { ActionTree } from "vuex";
import { IRootState, IRootActions, ISetObj } from "@/types/rootStateTypes";
import { rootConstants } from "./storeConst";

const actions: ActionTree<IRootState, IRootState> & IRootActions = {
    [rootConstants.DISPATCH_OBJECT_VALUE]({ commit }, setObj: ISetObj<any>) {
        commit(rootConstants.SET_OBJECT_VALUE, setObj)
    }
}

export default actions