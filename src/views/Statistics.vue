<template>
  <layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3>{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id">
              {{ item.amount }}
              {{ item.createAt }}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </layout>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Tabs from '@/components/Tabs.vue'
import intervalList from '@/constants/intervalList'
import typeList from '@/constants/typeList'

@Component({
  components: {
    Tabs
  }
})
export default class Statistics extends Vue {
  get recordList () {
    return (this.$store.state as RootState).recordList
  }

  get result () {
    const { recordList } = this

    type Items = RecordItem[]
    type HashTableItem={title: string;items: Items}

    const hashTable: { [key: string]: HashTableItem } = {}
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createAt!.split('T')
      hashTable[date] = hashTable[date] || {
        title: date,
        items: []
      }
      hashTable[date].items.push(recordList[i])
    }
    console.log(hashTable)
    return hashTable
  }

  beforeCreate () {
    this.$store.commit('fetchRecords')
  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  typeList = typeList;
};
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

</style>
