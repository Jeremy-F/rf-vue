import {GetterTree, MutationTree} from "vuex";
import State from "./State";
import AntennaModel from "../../Model/Antenna";
import BandModel from "../../Model/Band";

export default class Getters implements GetterTree<State, any>{
    [key: string]: (state: State, getters: any, rootState: any, rootGetters: any) => any;

    antennas = (state) => {
        return state.antennas;
    };
    antennaByName = (state) => (antennaName:string) => {
        let result = null;
        state.antennas.every((antenna) => {
            if(antenna.name === antennaName){
                result = antenna;
                return false;
            }
            return true;
        });
        return result;
    };
    bandByName = (state) => (antenna: AntennaModel, bandName:string) => {
        let result = null;
        antenna.bands.every((band : BandModel) => {
            if(band.name === bandName){
                result = band;
                return false;
            }
            return true;
        });
        console.log("Retour du bandByName ", result);
        return result;
    }
}