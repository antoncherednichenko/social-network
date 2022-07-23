
import { Module } from "vuex";
import { IRootState } from "@/types/rootStateTypes";
import { IProfile } from "@/types/profileModuleTypes";
import { profileConstants, rootConstants } from "../storeConst";

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
        [profileConstants.GET_PROFILE_BY_ID]({ dispatch, commit }, id: number) {
            commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.isLoading', value: true }, { root: true })

            return dispatch('api/API', {
                method: 'GET',
                type: `profile?id=${id}`
            }, { root: true }).then(res => {
                if(res.status === 200) {    
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.aboutMe', value: res.data?.aboutMe }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.contacts', value: res.data?.contacts }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.fullName', value: res.data?.fullName }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'user.login', value: res.data?.fullName }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.lookingForAJob', value: res.data?.lookingForAJob }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.lookingForAJobDescription', value: res.data?.lookingForAJobDescription }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.photos', value: res.data?.photos }, { root: true })
                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.currentUserID', value: res.data?.userId }, { root: true })

                    commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.isLoading', value: false }, { root: true })
                }
            }).catch(err => {
                console.error(err.message)
                commit(rootConstants.SET_OBJECT_VALUE, { path: 'profile.isLoading', value: false }, { root: true })
            })
        }
    }
}

export default profileModule