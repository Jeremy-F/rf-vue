const jQuery = require('jquery').default;

import Vue from 'vue';

Vue.use(require("vuex").default);
Vue.use(require("vue-resource").default);


const store = require("./store/index.ts").default;



let MainVue = new Vue({
    store: store,
    el: document.querySelector("#app") as Element,
    render (h) {
        return h(
            require('./components/Template/main').default
        );
    }
});