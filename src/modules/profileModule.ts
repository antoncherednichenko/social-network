
import { Module } from "vuex";
import { IRootState } from "@/types/rootStateTypes";
import { IProfile } from "@/types/profileModuleTypes";

const profileModule: Module<IProfile, IRootState> = {
    namespaced: true,
    state: { 
        aboutMe: '',
        contacts: null,
        currentUserID: null,
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: null,
        isLoading: false,
        editModal: {
            isModal: false
        }
    },
    actions: {
        getProfileById({ dispatch, commit }, id: number) {
            commit('setObjectValue', { path: 'profile.isLoading', value: true }, { root: true })

            return dispatch('api/API', {
                method: 'GET',
                type: `profile?id=${id}`
            }, { root: true }).then(res => {
                if(res.status === 200) {    
                    commit('setObjectValue', { path: 'profile.aboutMe', value: res.data?.aboutMe }, { root: true })
                    commit('setObjectValue', { path: 'profile.contacts', value: res.data?.contacts }, { root: true })
                    commit('setObjectValue', { path: 'profile.fullName', value: res.data?.fullName }, { root: true })
                    commit('setObjectValue', { path: 'user.login', value: res.data?.fullName }, { root: true })
                    commit('setObjectValue', { path: 'profile.lookingForAJob', value: res.data?.lookingForAJob }, { root: true })
                    commit('setObjectValue', { path: 'profile.lookingForAJobDescription', value: res.data?.lookingForAJobDescription }, { root: true })
                    commit('setObjectValue', { path: 'profile.photos', value: res.data?.photos }, { root: true })
                    commit('setObjectValue', { path: 'profile.currentUserID', value: res.data?.userId }, { root: true })

                    commit('setObjectValue', { path: 'profile.isLoading', value: false }, { root: true })
                }
            }).catch(err => {
                console.error(err.message)
                commit('setObjectValue', { path: 'profile.isLoading', value: false }, { root: true })
            })
        }
    }
}

export default profileModule