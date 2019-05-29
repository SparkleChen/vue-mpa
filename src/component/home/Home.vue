<template>
    <div>
        <el-container>
            <el-header class="review-header">
                <Nav></Nav>
            </el-header>
            <el-main>
                <Table></Table>
            </el-main>
        </el-container>
            <test v-slot:otherSlot="slotProps">
                <template>
                    {{slotProps.user.lastName}}
                </template>    
            </test>    
    </div>
</template>

<script>
    import Vue from 'vue';
    import Nav from '../Nav.vue';
    import Table from './Table.vue';
    import Test from '../Test.vue';
    import { Header,Main,Row, Col,Container } from 'element-ui';
    Vue.use(Header);
    Vue.use(Main);
    Vue.use(Container);
    Vue.use(Row);
    Vue.use(Col);
    export default {
        name: 'Home',
        components : {
          Test,
          Nav,
          Table,
          Header,
          Main,
          Row,
          Col,
          Container
        },
        data() {
            return {
                name : 1
            }
        },
        computed : {},
        methods: {
            // 修改table tr行的背景色
//            tableRowStyle({ row, rowIndex }) {
//                return 'background-color: pink'
//            },
        },
        created () {}
    }
</script>

<style lang="stylus" type="text/stylus">
    .review-header
        padding : 0px;
</style>