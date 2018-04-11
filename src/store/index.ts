import Vuex from 'vuex'


import Entities from './modules/Entities/Entities';
import SchoolsModule from "./modules/Schools";
import Formations from "./modules/Formations";
import Users from "./modules/Users";

const Store = new Vuex.Store({
    modules: {
        template: require("./modules/Template/").default,
        //users: require("./modules/Users.save/index").default,
        users: new Users(),
        //roles: require("./modules/Roles/index").default,
        schools: new SchoolsModule(),
        entities: new Entities(),
        formations: new Formations(),
    },
    strict: true
});
console.log("Store : ", Store);
export default Store;