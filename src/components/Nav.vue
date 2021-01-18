<template>
  <nav>
    <router-link to="/Labels" class="item" active-class="selected">
      <icon name="label"/>
      <p>标签</p>
    </router-link>

    <router-link to="/Money" class="item" active-class="selected">
      <icon name="money"/>
      <p>记账</p>
    </router-link>

    <router-link to="/Statistics" class="item" active-class="selected">
      <icon name="statistics"/>
      <p>统计</p>
    </router-link>
  </nav>
</template>

<script lang="ts">

export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected{
    color: green;
  }
}
</style>
