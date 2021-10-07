// 用来声明store

// 1.导入 vue 和vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 2. 把vuex注册为vue的插件
Vue.use(Vuex)

// 3.导出vue的实例
export default new Vuex.Store({
  // 声明state
  state: {
    // 字符串
    name: '法外狂徒 张三',
    // 数字
    age: 18,
    // 数组
    books: ['理想国','霸道总裁爱上我','小保镖']
  },
  mutations:{
    agePlus(state){
      state.age+=1
    }
  }
  // 声明mutations
  // 声明actions
  // 声明getters
})