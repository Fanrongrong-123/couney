<template>
  <layout>
    <div class="sticky">
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    </div>
    <ol>
      <li v-for="(group,index) in groupedList" :key="index">
        <h3 class="title">{{ beautify(group.title) }}
          <span>{{ group.total }}</span>
        </h3>
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
import clone from '@/lib/clone'

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
  }

  tagString (tag: Tag[]) {
    const tagName = tag.map(i => i.name)
    return tag.length === 0 ? '无' : tagName.join('，')
  }

  get recordList () {
    return (this.$store.state as RootState).recordList
  }

  get groupedList () {
    const { recordList } = this

    const newList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf())
    if (newList.length === 0) { return [] as Result }

    type Result = { title: string; items: RecordItem[]; total?: number }[]
    const result: Result = [{
      title: dayjs(newList[0].createAt).format('YYYY-MM-DD'),
      items: [newList[0]]
    }]

    for (let i = 1; i < newList.length; i++) {
      const current = newList[i]
      const last = result[result.length - 1]
      if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
        last.items.push(current)
      } else {
        result.push({
          title: dayjs(current.createAt).format('YYYY-MM-DD'),
          items: [current]
        })
      }
      result.map(group => {
        group.total = group.items.reduce((sum, item) => sum + item.amount, 0)
      })
    }
    return result
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
    background: #c4c4c4;

    &.selected {
      background: white;

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
  top: 0;
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
