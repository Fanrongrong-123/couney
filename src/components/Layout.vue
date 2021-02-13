<template>
  <div class="lay">
    <div class="nav-wrap" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue'
export default {
  name: 'Layout',
  components: { Nav },
  props: ['classPrefix']
}
</script>

<style scoped>
.lay {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav-wrap {
  flex-grow: 1;
  overflow: auto;
}
</style>
