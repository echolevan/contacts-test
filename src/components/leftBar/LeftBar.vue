<template>
  <div>
    <ul class="leftBar">
      <router-link to="/home">
        <li>
          <Icon type="document-text"></Icon>
          主页
        </li>
      </router-link>
      <li class="title">联系人管理</li>
      <router-link to="/contacts">
        <li>
          <Icon type="person-stalker"></Icon>
          联系人列表
        </li>
      </router-link>
      <router-link to="/contact">
        <li>
          <Icon type="person-stalker"></Icon>
          新增联系人
        </li>
      </router-link>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'leftBar',
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .leftBar
    position: absolute;
    left: 0;
    top: 0;
    padding-top 40px
    z-index: 3;
    overflow-y: auto;
    height: 100%;
    width 200px
    background #495060
    ul
      .title
        padding 20px 30px
        color hsla(0,0%,100%,.36)
      a
        color hsla(0,0%,100%,.7)
        &.router-link-active
          color: #2d8cf0
          li
            background: #363e4f
      li
        padding 15px
</style>
