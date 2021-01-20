// .d.ts文件一般存放全局声明

type RecordItem = { // 声明类型
  notes: string;
  tag: string[];
  type: string;
  amount: string;
  createAt?: Date;
}
