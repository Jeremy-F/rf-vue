import AntennaModel from "./Antenna";
import BandModel from "./Band";
import GraphiqueTypeModel from "./GraphiqueType";

export default class GraphiqueModel {

    private name : string;
    private antenna : AntennaModel;
    private band : BandModel;
    private graphiqueType : GraphiqueTypeModel;


    constructor() {
        this.name = "Création d'un graphique";
    }


    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public getAntenna(): AntennaModel {
        return this.antenna;
    }

    public setAntenna(value: AntennaModel) {
        this.antenna = value;
    }

    public getBand(): BandModel {
        return this.band;
    }

    public setBand(value: BandModel) {
        this.band = value;
    }

    public getGraphiqueType(): GraphiqueTypeModel {
        return this.graphiqueType;
    }

    public setGraphiqueType(value: GraphiqueTypeModel) {
        this.graphiqueType = value;
    }
}