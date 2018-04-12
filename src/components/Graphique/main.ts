import Plotly from 'plotly.js'
import {Vue, Component, Prop } from 'vue-property-decorator';

import Raphael from 'raphael/raphael'
global["Raphael"] = Raphael;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphiqueModel from "../../Model/Graphique";
import {Getter, Action} from 'vuex-class'
import AntennaModel from "../../Model/Antenna";
import BandModel from "../../Model/Band";
import { LineChart } from 'vue-morris'
import {GetChartsJson} from "../../api/resources";
import Chart from "../../Model/Chart";
import Render from './main.html';


class State{
    public static init = 0;
    public static antenna = 1;
    public static band = 2;
    public static graphique = 3;
    public static loadindGraphique = 4;
    public static loadedGraphique = 5;
}

const COLORS = [ '#42B8E0', '#33658A', '#F6AE2D', '#F26419', '#0E3A53' ]

@Render
@Component({
    data () {
        return {
            state: State.antenna,
            size : 6,
            State : State
        };
    },
    components : {
        LineChart
    }
})
export default class Graphique extends Vue{

    private antennaName : string = "";
    private bandName : string = "";
    private chart : Chart = new Chart();

    private size : number;
    private state : number = State.antenna;
    private State : State;

    lineColors = [COLORS[0]];

    @Getter("data/antennas") antennas : AntennaModel[];
    @Getter("data/antennaByName") antennaByName : (str : string) => AntennaModel;
    @Getter("data/bandByName") bandByName: (antennaName : AntennaModel, bandName) => BandModel;

    //Todo update name
    get name(){
        return "Création d'un graphique";
    }
    get currentAntenna() : AntennaModel {
        return this.antennaByName(this.antennaName);
    }
    get currentBand(){
        return this.bandByName(this.currentAntenna, this.bandName);
    }

    public moreSize() : boolean{
        if(this.size >= 12){
            return false;
        }
        this.size++;
        this.onResize();
        return true;
    }
    public minusSize() : boolean{
        if(this.size <= 1){
            return false;
        }
        this.size--;
        this.onResize();
        return true;
    }
    public onResize(){
        Plotly.Plots.resize(this.$refs.antoine);
    }
    public before(){
        if(this.state > 0){
            this.state--;
        }
    }
    public next(){
        if(this.state === State.graphique){
            this.state++;
            GetChartsJson(this.chart).then((result) => {
                let body = result["body"];
                let x = [];
                let y = [];
                body.data.forEach(({frequency, absolutePower}, index) => {
                    if(absolutePower > -150){
                        x.push(frequency)
                        y.push(absolutePower)
                    }
                });
                this.state++;
                Plotly.plot(
                    this.$refs.antoine,
                    [{x,y}],
                    {autosize: true}
                );
                this.chart["datas"] = JSON.parse(JSON.stringify(body));
            });
            return;
        }else if(this.state === State.loadindGraphique){

        }else{
            this.state++;
        }
    }
}