<template>
  <Layout class="bac">
    <div class="twitter-logo">
      <icon name="left" class="leftIcon"/>
      <span class="edit">编辑标签</span>
      <icon class="rightIcon"/>
    </div>
    <div class="from-item">
      <FromItem field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="addTags">
      <Button>刪除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import tagListModel from '@/models/tagListModel'
import FromItem from '@/components/Money/FormItem.vue'
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button,
    FromItem
  }
})
export default class EditLabel extends Vue {
  created () {
    const id = this.$route.params.id // 获取路由信息
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter(t => t.id === id)[0]// filter返回一个数组
    if (tag) {
      console.log('tag')
      console.log(tag)
    } else {
      this.$router.replace('/404') // 路由器 用push回退不了，replace要回退两次
    }
  }
}
</script>

<style lang="scss">
.bac{
  background: #F5F5F5;
}
.twitter-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 10px 10px;
  background: white;

  > .leftIcon {
    width: 20px;
    height: 20px;
  }

  > .rightIcon {
    width: 20px;
    height: 20px;
  }
}
.from-item{
  background: white;
  margin-top: 8px;
}

</style>
