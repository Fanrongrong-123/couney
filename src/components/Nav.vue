<template>
  <div class="nav">
    <router-link to="/Labels">
      <icon name="label"/>
      <p>标签</p>
    </router-link>

    <router-link to="/Money">
      <icon name="money"/>
      <p>记账</p>
    </router-link>

    <router-link to="/Statistics">
      <icon name="statistics"/>
      <p>统计</p>
    </router-link>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
}
</style>
