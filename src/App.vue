<template>
  <div id="app">
    <v-header v-if="isLogin && $route.name !== '404'"></v-header>
    <v-left-bar class="leftBar" v-if="isLogin && $route.name !== '404'"></v-left-bar>
    <router-view class="main content"></router-view>
  </div>
</template>

<script>
  import VHeader from 'components/header/Header'
  import VLeftBar from 'components/leftBar/LeftBar'
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'app',
    components: {
      'v-header': VHeader,
      'v-left-bar': VLeftBar
    },
    computed: {
      ...mapState([
        'isLogin'
      ])
    },
    methods: {
      ...mapActions([
        'toSetLogin'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .leftBar
    position absolute
    width 240px
    height 100%
    left 0
    top 0
    overflow auto

  .main.content
    position absolute
    width 100%
    height 100%
    left 0
    top 0
    padding 60px 0 0 215px
    overflow auto
</style>
