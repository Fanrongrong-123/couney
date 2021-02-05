<template>
  <layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <div class="sticky">
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    </div>
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{ beautify(group.title) }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tag) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </layout>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Tabs from '@/components/Tabs.vue'
import intervalList from '@/constants/intervalList'
import typeList from '@/constants/typeList'
import dayjs from 'dayjs'

@Component({
  components: {
    Tabs
  }
})
export default class Statistics extends Vue {
  beautify (string: string) {
    // const now = new Date();
    const day = dayjs(string)
    const now = dayjs() // 与下一行的now兼容
    if (day.isSame(now, 'day')) {
      return '今天'
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天'
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天'
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日')
    } else {
      return day.format('YYYY年M月D日')
    }

    // const d = new Date(Date.parse(string));
    // const y = d.getFullYear();
    // const m = d.getMonth();
    // const dd = d.getDay();
    // const now = new Date();
    // if (now.getFullYear() === y && now.getMonth() === m && now.getDay() === dd) {
    //   return '今天';
    // } else {
    //   return string;
    // }
    // console.log(y, m, dd);
  }

  tagString (tag: Tag[]) {
    return tag.length === 0 ? '无' : tag
  }

  get recordList () {
    return (this.$store.state as RootState).recordList
  }

  get result () {
    const { recordList } = this

    type Items = RecordItem[]
    type HashTableItem = { title: string; items: Items }

    const hashTable: { [key: string]: HashTableItem } = {}
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createAt!.split('T')
      hashTable[date] = hashTable[date] || {
        title: date,
        items: []
      }
      hashTable[date].items.push(recordList[i])
    }
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

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
}

.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999999;
  max-width: 80vm;
  overflow: hidden;
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  @extend %item;
}

.record {
  @extend %item;
  background: white;
}

</style>
