<template>
  <div class="bill-card">
    <div class="info">
      <p>
        用户: <span>{{ bill.user }}</span>
      </p>
      <p>
        花费: <span>{{ bill.money }}元</span>
      </p>
      <p>时间: <span>2020-10-05 16:00:52</span></p>
      <p>
        事项: <span class="van-ellipsis">这笔钱财花在:{{ bill.note }}</span>
      </p>
    </div>
    <div class="btn-group">
      <van-button type="danger">删除</van-button>
      <van-button type="warning">修改</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BillCard",
  props: ["bill"],
};
</script>

<style lang="scss" scope>
.info {
  p {
    font-size: 16px;
    color: #3396fb;
    margin: 5px;
    border: 1px dashed red;
    padding: 2px;
    vertical-align: top;
    span {
      width: 80%;
      height: 100%;
      display: inline-block;
      color: #ff6700;
      font-size: 20px;
      text-align: right;
      vertical-align: top;
    }
  }
}
.btn-group {
  display: flex;
  justify-content: space-around;
}
</style>
