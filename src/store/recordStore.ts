import clone from '@/lib/clone'

const localStorageKeyName = 'recordList'

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords () {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[]
    return this.recordList
  },
  saveRecords () {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList))
  },
  createRecord (record: RecordItem) {
    const record2: RecordItem = clone(record) // 深拷贝做一个record的副本，避免传值互相影响
    record2.createAt = new Date().toISOString()
    this.recordList && this.recordList.push(record2) // this.recordList?.push(record2)
    recordStore.saveRecords()
  }
}
recordStore.fetchRecords()

export default recordStore
