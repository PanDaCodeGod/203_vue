import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 解决冲突报警
import 'default-passive-events'

// 路由
import router from './router'

// 引入amfe-flexible
import 'amfe-flexible'

// 引入图表库
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')