/*
  项目入口文件
*/
import Vue from 'vue'
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  render: h => {
    console.log(App);
    return h(App)}
}).$mount('#app')
