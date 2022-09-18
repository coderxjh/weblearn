//该文件用于创建Vuex中最为核心的store
// 引入Vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';
Vue.use(Vuex)
import countOption from './count';
import personOption from './person';


// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOption,
        personAbout: personOption
    }
})