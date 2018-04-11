import {GraphiquesState} from "./State";

export default {
    state : new GraphiquesState(),
    mutations:require("./Mutations").default,
    getters:require("./Getters").default,
    actions:require("./Actions").default
};