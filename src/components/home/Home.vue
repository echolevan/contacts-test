<template>
  <div>
    欢迎回来 {{isLogin.email}}
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'isLogin'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
