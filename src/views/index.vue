<template>
  <div>
    <!-- 路由渲染 -->
    <router-view></router-view>

    <!-- 底部tab -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="wap-home-o">203</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/panda_tools"
        >工具箱</van-tabbar-item
      >
      <van-tabbar-item icon="after-sale" to="/me_pay">支付</van-tabbar-item>
      <van-tabbar-item icon="search" to="/bill">账单详情</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  mounted() {},
  data() {
    return {
      active: 0,
      count: 0,
      isLoading: false,
    };
  },
  methods: {},
};
</script>

<style>
.app-main {
  width: 600px;
  height: 400px;
}
</style>
