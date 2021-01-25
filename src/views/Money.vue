<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <FromItem field-name="备注："
              placeholder="在这里输入备注"
              @update:value="onUpdateNotes"
              class="item"
    />
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
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
  }
})
export default class Money extends Vue {
  tags = store.tagList;
  recordList = store.recordList;

  record: RecordItem = {
    notes: '',
    tag: [],
    type: '-',
    amount: ''
  };

  onUpdateTags (value: string[]) {
    this.record.tag = value
  }

  onUpdateNotes (value: string) {
    this.record.notes = value
  }

  onUpdateAmount (value: string) {
    this.record.amount = value
  }

  saveRecord () {
    store.createRecord(this.record)
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
