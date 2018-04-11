
export default {
    setPageTitle ({commit}, title) : string  {
        commit("SET_TITLE", title);
        return title;
    },
    addPageToHistory ({commit}, route, active : boolean = true): void  {
        commit("ADD_PAGE", {
            title: route.meta.title,
            path: route.path,
            active: active
        });
    },
    removePagesUntil ({commit}, route){
        commit("REMOVE_PAGES_UNTIL", route.path);
    },
    add_success ({commit}, success :string) {
        return commit("ADD_SUCCESS", success);
    },
    add_error ({commit}, error :string) {
        return commit("ADD_ERROR", error);
    },
    remove_success ({commit}, successIndex :number) {
        return commit("REMOVE_SUCCESS", successIndex);
    },
    remove_error ({commit}, errorIndex :string) {
        return commit("REMOVE_ERROR", errorIndex);
    }
};