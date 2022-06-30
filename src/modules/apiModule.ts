import axios from "axios"

import { Module } from "vuex"

import { IApiModule, IRequestSettings } from "@/types/apiModuleTypes"
import { IRootState } from "@/types/rootStateTypes"

const api: Module<IApiModule, IRootState> = {
    namespaced: true,
    state: {
        baseUrl: 'http://127.0.0.1:5000'
    },
    actions: {
        API({ state }, requestSettings: IRequestSettings) {
            const { method, type, data } = requestSettings

            return axios({
                baseURL: `${state.baseUrl}/${type}`,
                method,
                data
            }).then(res => {
                console.log(res)
                return res
            }).catch(err => {
                console.error(err.message)
            })
        }
    }
}

export default api