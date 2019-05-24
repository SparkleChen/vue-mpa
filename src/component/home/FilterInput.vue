<template>
    <div class="filter-input">
        <el-row :gutter="20">
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <el-input placeholder="请输入筛选" v-model="inputBu" clearable></el-input>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <el-input placeholder="请输入筛选" v-model="inputPro" clearable></el-input>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <el-input placeholder="请输入筛选" v-model="inputType" clearable></el-input>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <el-input placeholder="请输入筛选" v-model="inputAsin" clearable></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple filter-btn">
                    <el-button type="primary" @click="handleClickFilter">筛选</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Input,Row, Col,Button } from 'element-ui';
    Vue.use(Input);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Button);
    export  default  {
        name : 'filter-input',
        components : {
            Button,
            Input,
            Row,
            Col
        },
        data () {
            return {
                inputBu : '',
                inputPro : '',
                inputType : '',
                inputAsin : ''
            }
        },
         methods: {
            handleClickFilter (){
                let {...input} = {bu:this.inputBu,pro:this.inputPro,type:this.inputType,asin:this.inputAsin};
                this.$emit('filter-action',input);
            }
        }
    }
</script>

<style lang="stylus">
    .filter-input
        padding : 0px 30px 20px 30px;
        .filter-btn
            text-align : center;
</style>