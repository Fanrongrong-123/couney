<template>
  <div>
    <Layout class="labels">
      <div>
        <ol class="tag">
          <li>
            <span>衣</span>
            <icon name="right"/>
          </li>
          <li>
            <span>食</span>
            <icon name="right"/>
          </li>
          <li>
            <span>住</span>
            <icon name="right"/>
          </li>
          <li>
            <span>行</span>
            <icon name="right"/>
          </li>
        </ol>
      </div>
      <div class="addTags">
        <button>新增标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Labels extends Vue {
};
</script>

<style lang="scss">
.labels {
  background: #F5F5F5;

}

.tag {
  background: white;

  > li {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    align-items: center;
    padding-right: 18px;
    margin-left: 18px;
    border-bottom: 2px solid #EEEEEF;
    height: 44px;
  }
}

.addTags{
  text-align: center;
  padding-top: 44px ;

  > button{
    padding: 9px 15px;
    background: #767676;
    border: none;
    color: white;
    border-radius: 4px ;
  }
}
</style>
