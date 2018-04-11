import State from "../Module/State";

export default {
    warnings: (state) => {
        return state.warnings;
    },
    success: (state) => {
        return state.success;
    },
    pageTitle:(state)=>{
        return state.pageTitle;
    },pagesHistory:(state)=>{
        return state.pagesHistory;
    },pageExist: (state) => (path)=>{
        let result = false;
        state.pagesHistory.every((page) => {
            if(page.path === path){
                result = true;
            }
            return !result;
        });
        return result;
    },
    pageSubTitle(state) :string {
        return state.pageSubTitle;
    },
    loading (state) : boolean{
        return state.currentRequests.length > 0;
    }
};