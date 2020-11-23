<template>
  <div class="home-container">
    <button class="addBtn" @click="addClickHandler">
      <van-icon :color="'#fff'" name="plus" :size="'0.5rem'" />
    </button>
    <van-tabs
      type="line"
      :color="'#3396fb'"
      :title-active-color="'#3396fb'"
      lazy-render
    >
      <van-tab title="总览">
        <!-- 下拉菜单 -->
        <div>
          <van-dropdown-menu :overlay="false">
            <van-dropdown-item
              v-model="dropDownMenuValue1"
              :options="dropDownMenuOption1"
            />
            <van-dropdown-item
              v-model="dropDownMenuValue2"
              :options="dropDownMenuOption2"
            />
          </van-dropdown-menu>
        </div>
        <div class="echart-container">
          <Echarts :id="'echartsUser'" :echartData="echartData"></Echarts>
        </div>
      </van-tab>
      <van-tab title="账单流水">
        <van-collapse v-model="billActiveName" accordion>
          <van-collapse-item
            title="PanDa 花费了900.99元"
            :value="'2020-12-2'"
            name="1"
          >
            <BillCard :bill="bill"></BillCard>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab title="结算">
        <van-tabs
          type="line"
          :color="'#3396fb'"
          :title-active-color="'#3396fb'"
          lazy-render
        >
          <van-tab title="算账"> </van-tab>
          <van-tab title="事项"> </van-tab>
        </van-tabs>
      </van-tab>
      <!-- <van-tab title="没想好">不知道放什么好</van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
import Echarts from "@/components/Echarts";
import BillCard from "@/components/BillCard";
export default {
  name: "home",
  components: { Echarts, BillCard },
  data() {
    return {
      // bill
      bill: {
        user: "panda",
        money: 9998,
        note: "123",
      },
      value: 123,
      // 下拉菜单数据
      dropDownMenuValue1: 0,
      dropDownMenuValue2: 0,
      dropDownMenuOption1: [
        { text: "人员", value: 0 },
        { text: "类型", value: 1 },
        { text: "日期", value: 2 },
      ],
      dropDownMenuOption2: [
        { text: "全部", value: 0 },
        { text: "张三", value: 1 },
        { text: "李四", value: 2 },
        { text: "王五", value: 3 },
      ],
      billActiveName: "0",
      // 图表数据
      echartData: {
        title: {
          text: "用户消费饼状图",
          subtext: "总消费",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: ["张三", "李四", "王五"],
        },
        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { name: "张三", value: 123 },
              { name: "李四", value: 321 },
              { name: "王五", value: 250 },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    addClickHandler() {
      alert("panda真的帅");
    },
  },
};
</script>

<style lang="scss" scope>
.home-container {
  // position: relative;
  .addBtn {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    overflow: hidden;
    bottom: 80px;
    right: 20px;
    z-index: 999;
    border: none;
    box-shadow: 1px 1px 2px;
    background-color: #3396fb;
  }
  .echart-container {
    width: 350px;
    height: 300px;
    margin: 20px auto;
  }
}
</style>
