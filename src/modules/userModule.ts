
import { Module } from "vuex"

import { IRootState } from "@/types/rootStateTypes"
import { IUserModule, IUser } from "@/types/userModuleTypes"

const userModule: Module<IUserModule, IRootState> = {
    namespaced: true,
    state: {
        login: '',
        password: '',
        isAuth: false,
        captcha: {
            isCaptcha: false,
            url: ''
        }
    },
    actions: {
        login({ dispatch }, user: IUser) {
            const { login, password } = user

            return dispatch('api/API', {
                method: 'POST',
                type: 'login',
                data: {
                    email: login,
                    password,
                    rememberMe: false
                }
            }, { root: true }).then(res => {
                console.log(res, 'LOGIN')
            }).catch(err => {
                console.error(err.message)
            })
        },

        getCaptcha({ dispatch }) {

            return dispatch('api/API', {
                type: 'captcha',
                method: 'GET'
            }, { root: true }).then(res => {
                console.log(JSON.parse(res.data), 'CAPTCHA')
            })
        }
    }
}

export default userModule