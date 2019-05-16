<template>
    <div>
        <FilterInput></FilterInput>
        <el-row>
            <el-col :span="24">
                <div class="grid-content"  align="center">
                    <el-table
                            height="730px"
                            :data="tableData"
                            :default-sort = "{prop: 'date', rate: 'descending'}"
                            :header-cell-style="tableHeaderColor"
                            @row-dblclick="handleDoubleClick"
                            style="width:100%">
                        <el-table-column align="center" label="序号" type="index" width="100">
                            <template slot-scope="scope">
                                <div>{{ scope.$index }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="bu"
                                label="BU"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="name"
                                label="产品"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="asin"
                                label="ASIN"
                                width="140">
                        </el-table-column>
                        <el-table-column align="center" prop="type" label="型号" width="100">
                            <template slot="header" slot-scope="scope">
                                <el-dropdown @command="handleCommand">
                                    <span class="el-dropdown-link">{{currentDropDown}}</span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>型号</el-dropdown-item>
                                        <el-dropdown-item command="levoit">levoit</el-dropdown-item>
                                        <el-dropdown-item command="cosori">cosori</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="review" label="review(总数)" width="110">
                            <template slot-scope="scope">
                                <div @click="handleReviewCellClick(scope.$index, scope.row)">{{ scope.row.review }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                sortable
                                align="center"
                                prop="rate"
                                label="评分"
                                width="100">
                            <template slot-scope="scope">
                                <div @click="handleRateCellClick(scope.$index, scope.row)">{{ scope.row.rate }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="badreview"
                                label="差评率(%)"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="small_rangking"
                                label="小类排名"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="big_rangking2"
                                label="大类排名"
                                width="100">
                        </el-table-column>
                        <el-table-column label="review走势"  align="center">
                            <el-table-column
                                    align="center"
                                    prop="review2"
                                    label="本月review"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop="review3"
                                    label="上月review"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop="review4"
                                    label="本周review"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop="review5"
                                    label="上周review"
                                    width="100">
                            </el-table-column>
                        </el-table-column>
                    </el-table>
                    <el-dialog :visible.sync="popShow" width="70%" @open="afterPopShow">
                        <el-tabs v-model="tabName"  @tab-click="handleClickTab" >
                            <el-tab-pane :key="item.name" v-for="(item, index) in tabsData" :label="item.title" :name="item.name" :lazy="true" >
                                <graphic :line-data="lineData" :dynmic-id="item.name"></graphic>
                            </el-tab-pane>
                        </el-tabs>
                    </el-dialog>
                </div></el-col>
            <el-col :span="24">
                <div align="center" class="pagination-style">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="12"
                        layout="total, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import FilterInput from './FilterInput.vue';
    import Graphic from '../Graphic.vue';
    import { Table,TableColumn, Row, Col, Pagination, Dropdown, DropdownMenu, DropdownItem,Dialog, Tabs, TabPane } from 'element-ui';
    import { tableData,reviewData,rateData } from '../mock.js';
    Vue.use(Table);
    Vue.use(Dialog);
    Vue.use(TableColumn);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Pagination);
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Tabs);
    Vue.use(TabPane);
    export default  {
        name : 'review-table',
        components : {
            FilterInput,
            Graphic,
            Table,
            TableColumn,
            Row,
            Col,
            Pagination,
            Dropdown,
            DropdownMenu,
            DropdownItem,
            Dialog,
            Tabs,
            TabPane
        },
        data () {
            return {
                popShow : false,
                tableData : [],
                currentPage: 1,
                currentDropDown :'型号',
                total : 20,
                tabName: 'review',
                currentTab : '',
                lineData : [],
                tabsData : [{name : 'review',title : 'REVIEW'},{name : 'rate',title : '评分'}]
            }
        },
        created (){
            this.tableData = tableData;
        },
        methods : {
            // 修改table header的背景色
            tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                if (rowIndex !== 2) {
                    return 'background-color: lightblue;color: #fff;font-weight: 500;'
                }
            },
            handleCellDetail (id){
                window.location.href = `/review/detail?id=${id}`
            },
            handleDoubleClick(row, column, event){
                if(column.label!='review' || column.label!='rate'){
                    window.location.href = `/review/detail?id=${row.name}`
                }
            },
            handleCommand(command) {
                if(!command){
                    this.currentDropDown = '全部型号';
                    return
                }
                this.currentDropDown = command;
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleReviewCellClick(index,row){
                this.currentTab = Object.keys(row)[4];
                this.popShowFn();
            },
            handleRateCellClick(index,row){
                this.currentTab =  Object.keys(row)[5];
                this.popShowFn();
            },
            popShowFn(){
                this.popShow = !this.popShow;
            },
            afterPopShow () {
                this.tabName = this.currentTab;
                this.setTabBarStyle();
                //获取图表展示数据
                this.tabName === 'review' ? this.lineData = [...reviewData] : this.lineData = [...rateData];
            },
            handleClickTab(me,event){
              if(me.name == this.currentTab){
                  return
              }
              this.setTabBarStyle();
              this.currentTab = this.tabName;
              //获取图表展示数据
              this.tabName === 'review' ? this.lineData = [...reviewData] : this.lineData = [...rateData];
            },
            setTabBarStyle () {
                let tab = this.tabsData.map(item => item.name);
                let barWith = tab.indexOf(this.tabName) * 80;
                this.$nextTick(()=>{
                    document.querySelector('.el-tabs__active-bar').style.cssText = `transform : translateX(${barWith}px)`;
                })
            }
        }
    }
</script>

<style lang="stylus">
    .el-table--enable-row-hover .el-table__body tr:hover>td
        background-color: pink !important;
    .el-dialog__header
        padding : 0px;
    .el-tabs__item
        width : 80px;
        padding : 0px;
    .el-tabs__active-bar
        width : 80px !important;
    .el-dropdown-link
        cursor: pointer;
        color: white;
    .el-dropdown
        margin-top : 6px;
    .pagination-style
        padding : 10px;
</style>