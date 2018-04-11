import {API_ROOT} from "../config";
import * as VueResource from 'vue-resource';
import {HttpResponse} from "vue-resource";
import Chart from "../Model/Chart";

VueResource["Http"].options.root = API_ROOT;
/*
VueResource["Http"].interceptors.push((request, next) => {
    next();
});
*/
export const GetDataJson = () : Promise<HttpResponse> => VueResource["Resource"]("data.json").get();
export const GetChartsJson = (chart: Chart) : Promise<HttpResponse> => {
    console.log("Chart : ", chart);
    return VueResource["Resource"]("results{/fileName}").get(chart);
};