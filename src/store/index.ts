import Vuex from 'vuex'

import DataModule from "./Data/index"
console.log(DataModule);
const Store = new Vuex.Store({
    modules: {
        data : DataModule
    },
    strict: true
});
export default Store;