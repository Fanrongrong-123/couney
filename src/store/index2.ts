import recordStore from '@/store/recordStore'
import tagStore from '@/store/tagStore'

const store = {
  count: 2,
  addCount () {
    this.count += 1
    console.log('index2.count：' + `${this.count}`)
  },
  ...recordStore,
  ...tagStore
}

export default store
