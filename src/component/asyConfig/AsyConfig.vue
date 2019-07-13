<template>
  <div></div>
</template>

<script>
    import Vue from 'vue';
    import { config } from '../../js/config.js';
    export default {
        name: 'AsyConfig',
        computed : {
        },
        data () {
            return {
                address : config,
            }
        },
        mounted () {
          console.log(this.address);
        },
        methods : {}
    }
</script>

<style lang="stylus">
</style>