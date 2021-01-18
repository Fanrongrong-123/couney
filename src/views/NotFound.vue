<template>
  <div>
    <div>您输入的页面不存在，请检查路径是否正确</div>
    <div>
      <router-link to="/Money">返回首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>

</style>
