<template>
  <div class="noFound">
      404
    <router-link to="/home">返回首页</router-link>
  </div>
</template>

<script>
  export default {
    name: 'noFound',
    data() {
      return {}
    },
    mounted() {
      console.log('no fond')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .noFound
    display flex
    flex-direction: column;
    align-items center
    font-size 350px
    margin 15px 0 0 -60px
    a
      font-size 16px
</style>
