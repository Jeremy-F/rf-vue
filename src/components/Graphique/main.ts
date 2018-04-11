import {Vue, Component, Prop } from 'vue-property-decorator';
import Render from './main.html';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphiqueModel from "../../Model/Graphique";

class State{
    public static init = 0;
    public static antenna = 1;
    public static band = 2;
    public static graphique = 3;
    public static finish = 4;
}

@Render
@Component({
    data () {
        return {
            state: State.init,
            size : 6,
            graphiqueModelProp : new GraphiqueModel(),
        };
    },
})
export default class Graphique extends Vue{
    public graphiqueModelProp = GraphiqueModel;
    public size : number;
    public state : number;
    public State = State;

    get graphiqueModel () {
        return this.graphiqueModelProp;
    }

    public moreSize() : boolean{
        if(this.size >= 12){
            return false;
        }
        this.size++;
        return true;
    }
    public minusSize() : boolean{
        if(this.size <= 1){
            return false;
        }
        this.size--;
        return true;
    }
    public next(){
        this.state++;
    }
}