<template>
  <ul class="tabs" :class="{[classPrefix + '-tabs-item']:classPrefix}">
    <li v-for="tab in dataSource" :key="tab.value" @click="select(tab)"
        class="tabs-item"
        :class="liClass(tab)">
      {{ tab.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

type dataSourceTab = {
  text: string; value: string;
}

@Component
export default class Tabs extends Vue {
  @Prop({
    required: true,
    type: Array
  }) dataSource!: dataSourceTab[];

  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass (tab: dataSourceTab) {
    return {
      selected: tab.value === this.value,
      [this.classPrefix + '-tabs-item']: this.classPrefix
    }
  }

  select (tab: dataSourceTab) {
    this.$emit('update:value', tab.value)
  }
};
</script>
<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #959595;
    }
  }
}
</style>
