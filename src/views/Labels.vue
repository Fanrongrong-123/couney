<template>
  <div>
    <Layout class="labels">
      <div>
        <div class="tag">
          <router-link class="tag"
                       v-for="tag in tags" :key="tag.id"
                       :to="`/labels/edit/${tag.id}`">
            <span>{{ tag.name }}</span>
            <icon name="right"/>
          </router-link>
        </div>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTags">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Button from '@/components/Button.vue'
import store from '@/store/index2'

@Component({
  components: { Button }
})
export default class Labels extends Vue {
  tags = store.tagList;

  createTags () {
    const name = window.prompt('请输入你的标签名')
    if (name) {
      store.createTag(name)
    }
  }
};
</script>

<style lang="scss">
.labels {
  background: #F5F5F5;
  position: relative;

}

.tag {
  background: white;
  max-height: 75vh;
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
