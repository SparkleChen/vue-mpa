import Vue from 'vue';
import AsyConfig from '../component/asyConfig/AsyConfig.vue';
import '../css/reset.css';
new Vue({
    el: '#app',
    components: { AsyConfig },
    template: '<AsyConfig/>'
})