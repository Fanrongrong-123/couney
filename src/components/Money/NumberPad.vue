<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class NumberPad extends Vue {
  @Prop(String) value!: string
  output= this.value

  inputContent (event: MouseEvent) {
    const button = (event.target as HTMLButtonElement)
    const input = button.textContent! // 强制指定input存在
    if (this.output.length === 15) { return window.alert('不能再多了') }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input
      } else {
        this.output += input
      }
      return
    }
    if (this.output.indexOf('.') >= 0 && input === '.') { return }
    this.output += input
  }

  remove () {
    if (this.output.length === 1) {
      this.output = '0'
    } else {
      this.output = this.output.slice(0, -1)// 只留最后一位
    }
  }

  clear () {
    this.output = '0'
  }

  ok () {
    const number = this.output
    this.$emit('update:value', number)
    this.$emit('submit', number)
    this.output = '0'
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  > .output {
    @extend %innerShadow;
    background: white;
    font-size: 36px;
    font-family: Consolas, monospace; //编程字体
    padding: 0 16px;
    height: 54px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }

  .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 36px;
      float: left;
      background: transparent;
      border: none;

      &.ok {
        height: 36*2px;
        float: right;
      }

      &.zero {
        width: 25*2%;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(9), &:nth-child(6) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background: darken($bg, 5*4%);
      }

      &:nth-child(12) {
        background: darken($bg, 6*4%);
      }
    }
  }
}

</style>
