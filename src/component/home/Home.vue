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
    </div>
</template>

<script>
    import Vue from 'vue';
    import Nav from '../Nav.vue';
    import Table from './Table.vue';
    import { Header,Main,Row, Col,Container } from 'element-ui';
    Vue.use(Header);
    Vue.use(Main);
    Vue.use(Container);
    Vue.use(Row);
    Vue.use(Col);
    export default {
        name: 'Home',
        components : {
          Nav,
          Table,
          Header,
          Main,
          Row,
          Col,
          Container
        },
        data() {
            return {}
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