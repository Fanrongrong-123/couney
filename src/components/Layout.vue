<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
<!--      插槽：外面传什么内容，这里就是什么内容-->
    </div>
    <Nav/>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .content {
    flex-grow: 1;
    overflow: auto;
  }
}

</style>
