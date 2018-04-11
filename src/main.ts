import Vue from 'vue';

Vue.use(require("vue-resource").default);
let MainVue = new Vue({
    el: document.querySelector("#app") as Element,
    render (h) {
        return h(
            require('./components/Template/main').default
        );
    }
});