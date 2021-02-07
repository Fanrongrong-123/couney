// .d.ts文件一般存放全局声明
type RecordItem = { // 声明类型
  notes: string;
  tag: string[];
  type: string;
  amount: number;
  createAt?: string;
}

type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
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

// 自定义挂在window上的属性
// interface Window {
//
// }
