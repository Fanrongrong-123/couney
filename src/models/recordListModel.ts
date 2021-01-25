import clone from '@/lib/clone'

const localStorageKeyName = 'recordList'

const recordListModel = {
  data: [] as RecordItem[],

  fetch () {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[]
    return this.data
  },
  create (record: RecordItem) {
    const record2: RecordItem = clone(record) // 深拷贝做一个record的副本，避免传值互相影响
    record2.createAt = new Date()
    this.data.push(record2)
    this.save()
  },
  save () {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
}
export default recordListModel
