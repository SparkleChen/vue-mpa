<template>
    <div>
        <slot name="otherSlot" :user="users"></slot>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: 'test',
        data() {
            return {
                users : {
                    lastName : 'kkk'
                }
            }
        },
        computed : {},
        methods: {},
        created () {}
    }
</script>

<style lang="stylus" type="text/stylus"></style>