///<referen
import {Vue, Component, Prop } from 'vue-property-decorator';
import Render from './main.html';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GM from "../../Model/Graphique";

@Render
@Component({
    data (){
        return {
            graphiqueModels : []
        };
    },
    mounted () {
        let d = this.$store.dispatch("data/loadData");
        console.log("D", d);
        this.graphiqueModels = [];
    },
    components:{
        Graphique : require("../Graphique/main").default
    }
})
export default class Template extends Vue{
    public graphiqueModels: String[];

    public createGraphique(e){
        this.graphiqueModels.push('0');
    }
}