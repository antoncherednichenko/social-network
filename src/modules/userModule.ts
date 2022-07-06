import router from "@/router"

import { Module } from "vuex"
import { IRootState } from "@/types/rootStateTypes"
import { IUserModule, IUser } from "@/types/userModuleTypes"

const userModule: Module<IUserModule, IRootState> = {
    namespaced: true,
    state: {
        email: '',
        login: '',
        password: '',
        userID: 0,
        captcha: {
            isCaptcha: false,
            url: ''
        }
    },
    actions: {

        getMe({ dispatch, commit }) {

            return dispatch('api/API', {
                method: 'GET',
                type: 'me',
            }, { root: true }).then(res => {
                if(res.status === 200 && res.data?.data?.resultCode === 0 && res.data?.data?.id) {
                    localStorage.setItem('auth', JSON.stringify(true))
                    localStorage.setItem('id', JSON.stringify(res.data.data.id))

                    commit('setObjectValue', { path: 'user.userID', value: res.data.data.id }, { root: true })
                    commit('setObjectValue', { path: 'user.login', value: res.data.data.login }, { root: true })
                    commit('setObjectValue', { path: 'user.email', value: res.data.data.email }, { root: true })

                    router.push(`/profile/${res.data.data.id}`)
                }
            })
        },

        login({ dispatch, commit }, user: IUser) {
            const { email, password, captcha } = user

            return dispatch('api/API', {
                method: 'POST',
                type: 'login',
                data: {
                    email,
                    password,
                    rememberMe: false,
                    captcha
                }
            }, { root: true }).then(res => {
                if(res.status === 200 && res.data?.resultCode === 0) {
                    console.log(res)
                    commit(
                        'setObjectValue', 
                        { path: 'user.userID', value: res.data?.data?.userId },
                        { root: true }
                    )

                    localStorage.setItem('auth', JSON.stringify(true))
                    localStorage.setItem('id', JSON.stringify(res.data.data.userId))
                    
                    router.push(`/profile/${res.data.data.userId}`)
                } else if(res?.data?.resultCode === 10) {
                    dispatch('getCaptcha')
                }
            }).catch(err => {
                console.error(err.message)
            })
        },

        getCaptcha({ dispatch, commit }) {

            return dispatch('api/API', {
                type: 'captcha',
                method: 'GET'
            }, { root: true }).then(res => {
                console.log(res)
                if(res.status === 200) {
                    commit('setObjectValue', { path: 'user.captcha.url', value: res.data?.url }, { root: true })
                    commit('setObjectValue', { path: 'user.captcha.isCaptcha', value: true }, { root: true })
                }
            }).catch(err => {
                console.error(err.message)
            })
        }
    },
    getters: {
        isAuth() { return Boolean(localStorage.getItem('auth'))},
        userID() { return Number(localStorage.getItem('id')) }
    }
}

export default userModule