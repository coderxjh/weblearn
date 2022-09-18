import Vue from 'vue';
import App from './App';
import plugins from './plugins';
Vue.config.productionTip = false
//应用插件
Vue.use(plugins,1,2,3)
new Vue({
    el: '#app',
    render: h => h(App)
})