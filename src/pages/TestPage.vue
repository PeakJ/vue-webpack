<template>
  <div>
    <div>test页面</div>
    <div v-text="testValue"></div>
    <div>computed:{{testComputed}}</div>
    <div>getters:{{doneTodos.length}}</div>
    <div>name:{{name}}</div>
    <div class="my-div">{{count}}</div>
    <button @click="add">点击增加</button>
    <button @click="addAsync">点击异步增加</button>
    <button @click="changeName({name:'newName'})">改变名字</button>
    <button @click="createRequest">发请求</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions} from "vuex"
import { httpGet } from '../utils/http'
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
     ...mapState({
       count: 'count',
       name: 'name'
     }),
     ...mapGetters({
       doneTodos: 'doneTodos'
     })
  },
  methods: {
    createRequest() {
      console.log('testRequest');
      const params = {
        format:'js',
        idx: 1,
        n: 1
      }
      httpGet('HPImageArchive.aspx',params)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error))
    },
    ...mapMutations({
      add: 'increment'
    }),
    ...mapActions({
     addAsync: 'incrementAsync',
     changeName: 'changeName'
    })
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
