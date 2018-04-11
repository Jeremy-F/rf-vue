export class Data {
    private type : string;
    private name : string;
    private value : string;

    constructor(type: string, name: string, value: string) {
        this.type = type;
        this.name = name;
        this.value = value;
    }
    public static fromJSON(json : Data){
        return new Data(json.type, json.name, json.value);
    }
}
export default class GraphiqueTypeModel {
    private name;
    private datas : Data[];
}