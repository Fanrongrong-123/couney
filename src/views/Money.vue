<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <FromItem field-name="备注："
              placeholder="在这里输入备注"
              @update:value="onUpdateNotes"
              :value="record.notes"
              class="item"/>
    <Tags @update:value="onUpdateTags" :selected-tags="record.tag"/>
    <Tabs :value.sync="record.type" :data-source="typeList"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import FromItem from '@/components/Money/FormItem.vue'
import Tags from '@/components/Money/Tags.vue'
import { Component } from 'vue-property-decorator'
import Tabs from '@/components/Tabs.vue'
import typeList from '@/constants/typeList'

@Component({
  components: {
    Tabs,
    Tags,
    FromItem,
    NumberPad
  }
})
export default class Money extends Vue {
  record: RecordItem = {
    notes: '',
    tag: [],
    type: '-',
    amount: 0
  };

  typeList = typeList;

  get recordList () {
    return this.$store.state.recordList
  }

  created () {
    this.$store.commit('fetchRecords')
  }

  onUpdateNotes (value: string) {
    this.record.notes = value
  }

  onUpdateAmount (value: number) {
    this.record.amount = value
  }

  onUpdateTags (value: string[]) {
    this.record.tag = value
    return this.record.tag
  }

  saveRecord () {
    this.$store.commit('createRecord', this.record)
    this.record.notes = ''
    this.record.tag = []
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
