<template>
  <Layout class="bac">
    <div class="twitter-logo">
      <icon name="left" class="leftIcon" @click="goBack"/>
      <span class="edit">编辑标签</span>
      <icon class="rightIcon"/>
    </div>
    <div class="from-item">
      <FromItem :value="currentTag.name"
                field-name="编辑标签：" placeholder="请输入标签名"
                @update:value="updateTag"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import FromItem from '@/components/Money/FormItem.vue'
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button,
    FromItem
  }
})
export default class EditLabel extends Vue {
  get currentTag () {
    return this.$store.state.currentTag
  }

  created () {
    this.$store.commit('fetchTags')
    const id = this.$route.params.id
    this.$store.commit('setCurrentTag', id)
    if (!this.currentTag) {
      this.$router.replace('/404') // 路由器 用push回退不了，replace要回退两次
    }
  }

  updateTag (name: string) {
    if (this.currentTag) {
      this.$store.commit('updateTag', {
        id: this.currentTag.id,
        name: name
      })
    }
  }

  remove () {
    if (this.currentTag) {
      this.$store.commit('removeTag', this.currentTag.id)
    }
  }

  goBack () {
    this.$router.back()
  }
}
</script>

<style lang="scss">
.bac {
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

.from-item {
  background: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>
