<template>
    <layout>
      <Types class-prefix="aaa" :value.sync="xxx"/>
    </layout>
</template>

<script lang="ts">
import Types from '@/components/Money/Types.vue'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: { Types }
})
export default class Statistics extends Vue {
  xxx = '-';
};
</script>

<style lang="scss" scoped>
 ::v-deep .aaa-item {
  background: #c4c4c4;
  &.selected {
    background: white;

    &::after {
      display: none;
    }
  }
}

</style>
