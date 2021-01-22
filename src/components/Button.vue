<template>
  <div class="button"
       @click="$emit('click',$event)">
    <button>
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Button'
}
</script>

<style lang="scss">
.button {
  text-align: center;
  padding-top: 44px;

  > button {
    padding: 8px 15px;
    background: #767676;
    border: none;
    color: white;
    border-radius: 4px;
  }
}
</style>
