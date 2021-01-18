<template>
  <div class="numberPad">
    <div class="output"></div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>8</button>
      <button>7</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'numberPad'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  > .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace; //编程字体
    padding: 0 16px;
    text-align: right;
    height: 54px;
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

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11) {
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
