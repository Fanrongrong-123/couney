<template>
  <div>
    <Layout class="labels">
      <div>
        <ol class="tag">
          <li v-for="tag in tags" :key="tag.id">
            <span>{{ tag.name }}</span>
            <icon name="right"/>
          </li>
        </ol>
      </div>
      <div class="addTags">
        <button @click="createTags">新增标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import tagListModel from '@/models/tagListModel'

tagListModel.fetch()

@Component
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTags () {
    const name = window.prompt('请输入你的标签名')
    if (name) {
      const message = tagListModel.create(name)
      if (message === 'duplicate') {
        alert('标签名重复')
      } else if (message === 'success') {
        alert('标签名创建成功')
      }
    }
  }
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

.addTags {
  text-align: center;
  padding-top: 44px;

  > button {
    padding: 9px 15px;
    background: #767676;
    border: none;
    color: white;
    border-radius: 4px;
  }
}
</style>
