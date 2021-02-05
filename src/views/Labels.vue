<template>
  <Layout>
    <div class="write">
      <span class="tab">编辑标签</span>
    </div>
    <div class="tag">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Button from '@/components/Button.vue'
import { mixins } from 'vue-class-component'
import tagHelper from '@/mixins/tagHelper.ts'

@Component({
  components: { Button }
})
export default class Labels extends mixins(tagHelper) {
  get tags () {
    return this.$store.state.tagList
  }

  beforeCreate () {
    this.$store.commit('fetchTags')
  }
};
</script>

<style lang="scss">
.write {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 10px 10px;
}

.tag {
  background: white;
  max-height: 70vh;
  overflow: auto;

  > .tag {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    align-items: center;
    padding-right: 18px;
    margin-left: 18px;
    border-bottom: 2px solid #EEEEEF;
    height: 44px;

    > .icon {
      width: 20px;
      height: 20px;
    }
  }
}

.createTag {
  position: absolute;
  left: 50%;
  transform: translate(-50px);

  &-wrapper {
    margin-top: 10px;
  }
}
</style>
