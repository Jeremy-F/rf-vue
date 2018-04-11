import {GetDataJson} from "../../api/resources";
import {ActionContext, ActionTree, Store} from "vuex";
import State from "./State";


export default class Actions implements ActionTree<State, any>{
    [key: string]: any;

    loadData : (store: Store<any>, forceRefresh: boolean) => Promise<void> =
        ({getters, commit}, forceRefresh: boolean = false) => {
        return GetDataJson().then(response => {
            commit("SET_ANTENNAS", response["body"].antennas);
        });
    }
}