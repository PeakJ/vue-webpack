<template>
  <div>
    <button @click="showDialog">弹窗</button>
  </div>
</template>
<script>
import Vue from 'vue'
import { Dialog } from "vant";
Vue.use(Dialog);
export default {
  methods: {
    showDialog: () => {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容",
        className: 'cus-dialog'
      }).then(() => {
        // on close
        console.log('关闭了')
      });
    }
  }
};
</script>
<style scoped>
button {
  background-color: #ff5252;
  color: white;
  width: 200px;
  height: 88px;
  font-size: 34px;
}
</style>
