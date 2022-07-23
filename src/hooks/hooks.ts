import { useStore as baseUseStore } from "vuex"
import { key } from "@/store"


export const useStore = () => baseUseStore(key)