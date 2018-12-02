<template>
  <div>
    <div>test页面</div>
    <div>data:{{testValue}}</div>
    <div>computed:{{testComputed}}</div>
    <div>name:{{name}}</div>
    <div class="my-div">{{count}}</div>
    <button @click="add">点击增加</button>
    <button @click="addAsync">点击异步增加</button>
    <button @click="changeName">改变名字</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TestPage",
  data() {
    return {
      testValue: "bryce"
    };
  },
  computed: {
    testComputed() {
      return this.testValue + "computed";
    },
    // ...mapState({
    //   count: "count"
    // })
     ...mapState([
       'count',
       'name'
     ])
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    addAsync() {
      this.$store.dispatch("incrementAsync");
    },
    changeName() {
      this.$store.dispatch('changeName',{
        name: 'newName'
      })
    }
  }
};
</script>
<style scoped>
.my-div {
  background: red;
  width: 200px;
  height: 88px;
  margin: 0 auto;
}
</style>
