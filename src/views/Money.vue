<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad @update:value="onUpdateAmount"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types @update:value="onUpdateTypes"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
import Types from '@/components/Money/Types.vue'
import { Component } from 'vue-property-decorator'

type Record = { // 声明类型
  notes: string;
  tag: string[];
  type: string;
  amount: string;
}

@Component({
  components: { Types, Tags, Notes, NumberPad }
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];

  record: Record ={
    notes: '', tag: [], type: '', amount: ''
  }

  onUpdateTags (value: string[]) {
    console.log(value)
    this.record.tag = value
  }

  onUpdateNotes (value: string) {
    this.record.notes = value
  }

  onUpdateTypes (value: string) {
    this.record.type = value
  }

  onUpdateAmount (value: string) {
    this.record.amount = value
  }
}

</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
