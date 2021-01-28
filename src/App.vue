<template>
  <div>
    <router-view/><!--    路由显示位置-->
  </div>
</template>

<script lang="js">
import store from '@/store/index2'

export default {
  data () {
    return {
      store: store // 告诉VUE监听store
    }
  }
}

</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
