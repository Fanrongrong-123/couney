// .d.ts文件一般存放全局声明

type RecordItem = { // 声明类型
  notes: string;
  tag: string[];
  type: string;
  amount: string;
  createAt?: Date;
}

type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicate';
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  remove: (id: string) => boolean;
  save: () => void;
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: TagListModel['update']; // 类型与TagListModel['update']相同
  findTag: (id: string) => Tag | undefined;
}
