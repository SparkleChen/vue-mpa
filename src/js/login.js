import Vue from 'vue';
import Login from '../component/login/Login.vue';
import '../css/reset.css';
new Vue({
    el: '#app',
    components: { Login },
    template: '<Login/>'
})