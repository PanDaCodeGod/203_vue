<template>
  <transition appear name="van-fade">
    <div :id="id" style="width: 100%; height: 100%"></div>
  </transition>
</template>

<script>
export default {
  name: "Echarts",
  props: ["id", "echartData"],
  data() {
    return {
      // echart实例
      myEcharts: {},
    };
  },
  mounted() {
    this.initMyEcharts();
  },
  beforeDestroy() {
    this.$echarts.dispose(this.myEcharts);
  },
  methods: {
    // 初始化图表
    initMyEcharts() {
      this.myEcharts = this.$echarts.init(
        document.getElementById(this.id),
        "light"
      );
      this.myEcharts.setOption(this.echartData);
      this.showFlag = true;
    },
  },
};
</script>

<style lang="scss" scope>
</style>
