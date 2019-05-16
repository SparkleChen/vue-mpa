import Vue from 'vue';
import Home from '../component/home/Home.vue';
import '../css/reset.css';

new Vue({
    el: '#app',
    components: { Home },
    template: '<Home/>'
})