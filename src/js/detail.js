import Vue from 'vue';
import Detail from '../component/detail/Detail.vue';
import '../css/reset.css';

new Vue({
    el: '#app',
    components: { Detail },
    template: '<Detail/>'
})