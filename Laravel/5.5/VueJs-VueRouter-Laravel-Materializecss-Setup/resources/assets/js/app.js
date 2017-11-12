// Require bootstrap-file
require('./bootstrap');

// Bind Vue to window
window.Vue = require('vue');

// Import VueRouter
import VueRouter from 'vue-router';

// Say VueJS to use VueRouter
Vue.use(VueRouter);

// Import route-file
import { routes } from './routes';

// Instantiate the router
const router = new VueRouter({
    routes: routes, // kurz für 'routes: routes'
    mode: 'history'
});

// LOad additional Components
require('./componentLoader');

// Instantiate Vue
const app = new Vue({
    router,
    data: {
        message: "Hello World!",
        seitentitel: "Home"
    },
    created: function(){
        console.log('erstellt');
    },
    methods: {
        testClick: function(){
            console.log('Testklick-Aufruf');
            $('#modal1').modal('open');
        }
    },
    mounted: function(){
        console.log('mounted');
        $('.modal').modal();
    }
}).$mount('#app');

// Require Materialize-specific stuff, e.g. initialization of side-nav
require('./materialize');
