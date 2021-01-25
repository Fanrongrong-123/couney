import recordListModel from '@/models/recordListModel'
import tagListModel from '@/models/tagListModel'

const store = {
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => { return recordListModel.create(record) },

  // Tag story
  tagList: tagListModel.fetch(),

  findTag (id: string) {
    return this.tagList.filter(t => t.id === id)[0]
  },

  createTag: (name: string) => {
    const message = tagListModel.create(name)
    if (name) {
      if (message === 'duplicate') {
        alert('标签名重复')
      } else if (message === 'success') {
        alert('标签名创建成功')
      }
    }
  },

  removeTag: (id: string) => {
    return tagListModel.remove(id) // 简化了成功和失败的代码，具体看removeTag定义的类型
  },

  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name)
  }
}

export default store
