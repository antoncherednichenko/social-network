import axios from "axios"
import { Module } from "vuex"
import { IApiModule } from "@/types/apiModuleTypes"
import { IRootState } from "@/types/rootStateTypes"

const api: Module<IApiModule, IRootState> = {
    namespaced: true,
    state: {
        baseUrl: 'http://127.0.0.1:5000'
    },
    actions: {
        API({ state }, { method, type, data }) {

            return axios({
                baseURL: `${state.baseUrl}/${method}`,
                method: type,
                data
            }).then(res => {
                console.log(JSON.parse(res.data))
                return res.data
            }).catch(err => {
                console.error(err.message)
            })
        }
    }
}

export default api