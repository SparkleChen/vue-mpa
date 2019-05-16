<template>
    <div>
        <el-container>
          <el-header class="review-header">
              <Nav :activeIndex="activeIndex"></Nav>
          </el-header>
            <el-main>
                <el-row v-for="item of num" :key="item">
                    <el-col :span="8"><div class="grid-content">
                        <div class="category-name">
                            <span class="name">XXX名称</span>
                            <span class="value">XXXXXX</span>
                        </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content">
                        <div class="category-name">
                            <span class="name">XXX名称</span>
                            <span class="value">XXXXXX</span>
                        </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content">
                        <div class="category-name">
                            <span class="name">XXX名称</span>
                            <span class="value">XXXXXX</span>
                        </div>
                    </div></el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Nav from '../Nav.vue';
    import { getQueryString }  from '../../common/util.js';
    import { Container, Header, Main, Row, Col} from 'element-ui';
    Vue.use(Container);
    Vue.use(Header);
    Vue.use(Main);
    Vue.use(Row);
    Vue.use(Col);

    export default {
        name : 'detail',
        components: {
            Nav,
            Container,
            Header,
            Main,
            Row,
            Col,
        },
        computed: {
            getParam () {
                return this.id = getQueryString('id');
            }
        },
        data(){
            return {
                id : null,
                activeIndex : "2",
                num : [1,2,3,4,5,6,7,8,9,10]
            }
        },
        mounted () {

        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .review-header
        padding : 0px;
    .category-name
        height : 60px;
        line-height : 60px;
        text-align : center;
        font-size : 15px;
        padding : 10px 0px;
        .name
            color : #cacaca
            padding : 0px 30px;

</style>