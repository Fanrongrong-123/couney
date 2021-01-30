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

@Component({
  components: { Button },
  computed: {
    tags () {
      return this.$store.state.tagList
    }
  }
})
export default class Labels extends Vue {
  beforeCreate () {
    this.$store.commit('fetchTags')
  }

  createTags () {
    const name = window.prompt('请输入标签名')
    if (!name) { return window.alert('标签名不能为空') }
    this.$emit('onUpdateTags', name)
    this.$store.commit('createTag', name)
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
