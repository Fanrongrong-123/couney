<template>
  <Layout>
    <div>
      <icon name="left"/>
      <span>编辑标签</span>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import tagListModel from '@/models/tagListModel'

@Component
export default class EditLabel extends Vue {
  created () {
    const id = this.$route.params.id // 获取路由信息
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter(t => t.id === id)[0]// filter返回一个数组
    if (tag) {
      console.log(tag)
    } else {
      this.$router.replace('/404') // 路由器 用push回退不了，replace要回退两次
    }
  }
}
</script>

<style scoped>

</style>
