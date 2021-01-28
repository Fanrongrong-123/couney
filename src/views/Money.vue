<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <FromItem field-name="备注："
              placeholder="在这里输入备注"
              @update:value="onUpdateNotes"
              class="item"
    />
    <Tags @update:value="onUpdateTags"/>
    <button @click="add"> +1</button>
    {{ count }}
    <Types :value.sync="record.type"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import FromItem from '@/components/Money/FormItem.vue'
import Tags from '@/components/Money/Tags.vue'
import Types from '@/components/Money/Types.vue'
import store from '@/store/index2.ts'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    Types,
    Tags,
    FromItem,
    NumberPad
  },
  computed: { // computed功能，当里面的值变化时就会更新外面的值
    count () {
      return store.count
    },
    recordList () {
      return store.recordList // 传的对象（地址）
    }

  }
})
export default class Money extends Vue {
  // count = store.count; //传值，只一开始传了一次（只获取一次），所以直接调用store.addCount()，money的count不会变化

  record: RecordItem = {
    notes: '',
    tag: [],
    type: '-',
    amount: ''
  };

  count: any;

  onUpdateNotes (value: string) {
    this.record.notes = value
  }

  onUpdateAmount (value: string) {
    this.record.amount = value
  }

  onUpdateTags (value: string[]) {
    this.record.tag = value
  }

  saveRecord () {
    store.createRecord(this.record)
  }

  add () {
    store.addCount()
    console.log('money.count：' + `${this.count}`)
  }
}

</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.item {
  background: #F5F5F5;
  padding: 5px 0;
}
</style>
