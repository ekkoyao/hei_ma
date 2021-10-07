<template>
  <div id="app">

    <!-- 获取姓名 -->
    <h2>{{ name }}</h2>

    <!-- 获取年龄 -->
    <h2>{{ age }}</h2>

    <ul>
      <li v-for="item in books" :key="item">{{ item }}</li>
    </ul>
    <button @click="agePlus">改变年龄</button>
  </div>
</template>

<script>
// mapState 映射函数
// 把state从vuex中映射到组件中
// import { mapState } from 'vuex'

export default {
  components: {

  },
  created() {
    console.log(this);
  },
  computed: {
    // ...mapState(['name', 'age','books'])
    // ...obj
    ...aMap(['name', 'age','books'])

  },
  methods:{
    agePlus(){
      this.$stores.commit('agePlus')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
