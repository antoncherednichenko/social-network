
import { Module } from "vuex"

import { IRootState } from "@/types/rootStateTypes"
import { IUserModule, IUser } from "@/types/userModuleTypes"

const userModule: Module<IUserModule, IRootState> = {
    namespaced: true,
    state: {
        login: '',
        password: '',
        isAuth: false,
        userID: 0,
        captcha: {
            isCaptcha: false,
            url: ''
        }
    },
    actions: {
        login({ dispatch, commit }, user: IUser) {
            const { login, password, captcha } = user

            return dispatch('api/API', {
                method: 'POST',
                type: 'login',
                data: {
                    email: login,
                    password,
                    rememberMe: false,
                    captcha
                }
            }, { root: true }).then(res => {
                if(res.status === 200 && res.data?.resultCode === 0) {
                    commit(
                        'setObjectValue', 
                        { path: 'user.userID', value: res.data?.data?.userId },
                        { root: true }
                    )
                } else if(res?.data?.resultCode === 10) {
                    dispatch('getCaptcha')
                }
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