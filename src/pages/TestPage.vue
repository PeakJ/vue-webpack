<template>
  <div>
    <div>test页面</div>
    <div>data:{{testValue}}</div>
    <div class="my-div"></div>
  </div>
</template>
<script>
export default {
  name: 'TestPage',
  data () {
    return {
      testValue: 'bryce'
    }
  }
}
</script>
<style scoped>
  .my-div{
    background: red;
    width: 200px;
    height: 88px;
    margin: 0 auto
  }
</style>
