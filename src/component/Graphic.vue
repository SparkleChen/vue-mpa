<template>
    <div :id="getEchartsId" class="echarts-style"></div>
</template>

<script>
    import Vue from 'vue';
    var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/line');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    require("echarts/lib/component/visualMap");
    export  default  {
        name : 'graphic',
        data () {
            return {
                myChart : null
            }
        },
        props : {
            lineData : {
                type : Array,
                default : []
            },
            dynmicId : {
                type : String,
                required : true
            }
        },
        computed : {
            getEchartsId () {
                return `echarts-id${this.dynmicId}`
            }
        },
          watch: {
            lineData(nv,ov){
                this.lineData = nv;
                this.setEchartsOption(this.optionConfig(this.lineData));
            }
        },
        methods : {
          optionConfig (data) {
              let dateList = data.map(item => item[0]);
              let valueList = data.map(item => item[1]);
              return {
                  // Make gradient line here
                  visualMap: [{
                      show: false,
                      type: 'continuous',
                      seriesIndex: 0,
                      min: 0,
                      max: 400
                  }],
                  title: [{
                      left: 'center',
                      text: 'Gradient along the y axis'
                  }],
                  tooltip: {
                      trigger: 'axis'
                  },
                  xAxis: [{
                      name:'日期',
                      data: dateList
                  }],
                  yAxis: [{
                      name : 'name',
                      nameGap : 20,
                      splitLine: {show: false}
                  }],
                  series: [{
                      type: 'line',
                      showSymbol: false,
                      data: valueList
                  }]
              }
          },
          setEchartsOption(option) {
              this.myChart.setOption(option);
          }
        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(document.getElementById(`echarts-id${this.dynmicId}`));
        }
    }
</script>

<style lang="stylus">
    .echarts-style
        height : 70vh;
</style>