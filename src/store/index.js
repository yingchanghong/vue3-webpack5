import { defineStore } from 'pinia';

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'create',
  // state: 返回对象的函数
  state: () => ({
    createList: [],
  }),
  actions: {
    addCreate(val) {
      if (this.createList[val.index]) {
        this.createList.splice(val.index, 1, val);
      } else {
        this.createList.push(val);
      }
    },
  },
});
