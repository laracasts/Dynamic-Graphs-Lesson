import Vue from 'vue';
import VueResource from 'vue-resource';
import RevenueGraph from './components/RevenueGraph';

Vue.use(VueResource);

new Vue({
    el: 'body',

    components: { RevenueGraph }
});
