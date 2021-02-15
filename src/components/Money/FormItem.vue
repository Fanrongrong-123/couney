<template>
  <div>
    <label class="formItem">
      <span class="name">{{fieldName }}</span>
      <input type="text" :placeholder="placeholder"
             :value="value"
             @input="onNotesChanged($event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class FromItem extends Vue {
  @Prop({ default: '' }) value!: string;

  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  onNotesChanged (value: string) {
    this.$emit('update:value', value)
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 37px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

</style>
