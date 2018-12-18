<template>
  <div class="hello">
    <button @click="goNext('TestPage')">go test</button>
    <button @click="goNext('TestVant')">go Vant</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goNext: function (name) {
      this.$router.push({name})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.hello button{
  background-color: #FF5252;
  color: white;
  width:200px;
  height: 88px;
  font-size: 34px;
}
</style>
