import Vue from 'vue';
import App from './App';
Vue.config.productionTip = false
//应用插件
new Vue({
    el: '#app',
    render: h => h(App)
})