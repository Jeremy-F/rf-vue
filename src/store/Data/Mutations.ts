import {MutationTree} from "vuex";
import State from "./State";

export default class Mutations implements MutationTree<State>{
    [key: string]: (state: State, payload: any) => any;
    SET_ANTENNAS : (state : State, antennas) =>  any =
        (state, antennas) => {
            state.antennas = antennas;
            return state.antennas;
        };
}