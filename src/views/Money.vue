<template>
  <Layout class-prefix="layout">
    {{ recordList }}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types :value.sync="record.type"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
import Types from '@/components/Money/Types.vue'
import { Component, Watch } from 'vue-property-decorator'

type Record = { // 声明类型
  notes: string;
  tag: string[];
  type: string;
  amount: string;
  createAt?: Date;
}

@Component({
  components: {
    Types,
    Tags,
    Notes,
    NumberPad
  }
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

  record: Record = {
    notes: '',
    tag: [],
    type: '-',
    amount: ''
  };

  onUpdateTags (value: string[]) {
    console.log(value)
    this.record.tag = value
  }

  onUpdateNotes (value: string) {
    this.record.notes = value
  }

  onUpdateAmount (value: string) {
    this.record.amount = value
  }

  saveRecord () {
    const record2: Record = JSON.parse(JSON.stringify(this.record)) // 深拷贝做一个record的副本，避免传值互相影响
    record2.createAt = new Date()
    this.recordList.push(record2)
  }

  @Watch('recordList')
  onRecordListChange () {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
  }
}

</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
