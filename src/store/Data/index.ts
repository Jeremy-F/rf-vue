import Actions from "./Actions";
import Getters from "./Getters";
import Mutations from "./Mutations";
import State from "./State";

export default {
    namespaced : true,
    state : new State(),
    mutations: new Mutations(),
    getters: new Getters(),
    actions: new Actions()
};