import State from "../Module/State";
import Model from "../../interfaces/Model";

export default {
    SET_ALLPAGES_ACTIVE (state, active: boolean = true){
        state.pagesHistory.forEach((page, index) => {
            //state.pagesHistory.splice(index, 1);
            page.active = active;
            //state.pagesHistory.push(page);
        });
    },
    SET_TITLE: (state, title:string) => {
        state.pageTitle = title;
    },
    ADD_PAGE: (state, page) => {
        state.pagesHistory.push(page);
    },
    REMOVE_PAGE:(state, path) => {
        state.pagesHistory.forEach((page, index) => {
            if(page.path === path){
                state.pagesHistory.splice(index, 1);
            }
        });
    },
    REMOVE_PAGES_UNTIL:(state, path) => {
        state.pagesHistory.every((page, index) => {
            if(page.path === path){
                state.pagesHistory.splice(index, state.pagesHistory.length - index);
                return false;
            }
            return true;
        });
    },
    SET_SUBTITLE (state, subtitle : string | null) : string {
        state.pageSubTitle = subtitle;
        return subtitle;
    },
    ADD_SUCCESS (state, success : string) : number{
        state.success.push(success);
        return state.success.length -1;
    },
    REMOVE_SUCCESS (state, successIndex : number) : boolean{
        if(state.success[successIndex]){
            state.success.splice(successIndex, 1);
            return true;
        }return false;
    },
    ADD_ERROR (state, error : string) : number{
        state.warnings.push(error);
        return state.warnings.length -1;
    },
    REMOVE_ERROR (state, errorIndex : number) : boolean{
        if(state.warnings[errorIndex]){
            state.warnings.splice(errorIndex, 1);
            return true;
        }return false;
    },
    ADD_CURRENT_REQUEST (state, currentRequest): Promise<Model|Model[]> {
        console.log("ADD_CURRENT_REQUEST ???? ", state.currentRequests);
        state.currentRequests.push(currentRequest);
        return currentRequest;
    },
    REMOVE_REQUEST (state, currentRequest) : boolean  {
        let result = false;
        state.currentRequests.forEach((request: Promise<Model|Model[]>, index : number) => {
            if(request === currentRequest){
                state.currentRequests.splice(index, 1);
                result = true;
            }
        });
        return result;
    },
};