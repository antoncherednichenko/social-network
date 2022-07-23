import router from "@/router"

import { Module } from "vuex"
import { IRootState } from "@/types/rootStateTypes"
import { IUserModule, IUser } from "@/types/userModuleTypes"
import { userConstants, rootConstants } from "../storeConst"

const userModule: Module<IUserModule, IRootState> = {
    namespaced: true,
    state: {
        email: '',
        login: '',
        password: '',
        userID: null,
        isAuth: false,
        captcha: {
            isCaptcha: false,
            url: ''
        }
    },
    actions: {

        [userConstants.GET_ME]({ dispatch, commit }) {

            return dispatch('api/API', {
                method: 'GET',
                type: 'me',
            }, { root: true }).then(res => {
                if(res.status === 200 && res.data?.data?.resultCode === 0 && res.data?.data?.id) {
                    localStorage.setItem('isAuth', JSON.stringify(true))
                    localStorage.setItem('userID', JSON.stringify(res.data.data.id))
                    localStorage.setItem('userLogin', JSON.stringify(res.data.data.login || res.data.data.email))

                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.userID', value: res.data.data.id }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.isAuth', value: true }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.login', value: res.data.data.login }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.email', value: res.data.data.email }, { root: true })

                    router.push(`/profile/${res.data.data.id}/me`)
                } else {
                    localStorage.setItem('isAuth', JSON.stringify(false))
                    localStorage.setItem('userID', JSON.stringify(null))

                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.userID', value: null }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.isAuth', value: false }, { root: true })
                }
            })
        },

        [userConstants.LOGIN]({ dispatch, commit }, user: IUser) {
            const { email, password, captcha } = user

            return dispatch('api/API', {
                method: 'POST',
                type: 'login',
                data: {
                    email,
                    password,
                    rememberMe: true,
                    captcha
                }
            }, { root: true }).then(res => {
                if(res.status === 200 && res.data?.resultCode === 0) {
                    localStorage.setItem('isAuth', JSON.stringify(true))
                    localStorage.setItem('userID', JSON.stringify(res.data?.data?.userId))
                    localStorage.setItem('userLogin', JSON.stringify(email))

                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.userID', value: res.data?.data?.userId }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.isAuth', value: true }, { root: true })
                    
                    router.push(`/profile/${res.data.data.userId}/me`)
                } else if(res?.data?.resultCode === 10) {
                    dispatch(userConstants.GET_CAPTCHA)
                }
            }).catch(err => {
                localStorage.setItem('isAuth', JSON.stringify(false))
                localStorage.setItem('userID', JSON.stringify(null))

                console.error(err.message)
            })
        },

        [userConstants.GET_CAPTCHA]({ dispatch, commit }) {

            return dispatch('api/API', {
                type: 'captcha',
                method: 'GET'
            }, { root: true }).then(res => {
                if(res.status === 200) {
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.captcha.url', value: res.data?.url }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.captcha.isCaptcha', value: true }, { root: true })
                }
            }).catch(err => {
                console.error(err.message)
            })
        }
    },
    getters: {
        isAuth() { return JSON.parse(localStorage.getItem('isAuth') || 'false')},
        userID() { return JSON.parse(localStorage.getItem('userID') || 'null')},
        userLogin() { return JSON.parse(localStorage.getItem('userLogin') || 'null')}
    }
}

export default userModule