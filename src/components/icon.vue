<template>
  <svg class="icon" @click="$emit('click',$event)">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try { importAll(require.context('../assets/icons', true, /\.svg$/)) } catch (error) { console.log(error) }
export default {
  name: 'icon',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.icon {
  fill: currentColor;
  overflow: hidden;
}
</style>
