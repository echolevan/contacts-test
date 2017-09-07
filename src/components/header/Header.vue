<template>
  <div>
    <div class="nav">
      <div class="logo">
        Contact管理系统
      </div>
      <div class="userInfo">
        <Dropdown>
          <a href="javascript:void(0)">
            {{isLogin.email}}
            <Icon type="arrow-down-b"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem @click.native="logout()">退出登录</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'header',
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'isLogin'
      ])
    },
    methods: {
      ...mapActions([
        'toLogout'
      ]),
      logout() {
        this.toLogout().then(res => {
          this.$Message.success('登出成功!')
          this.$router.push('/login')
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .nav
    position relative
    z-index 4
    width 100%
    height 40px
    background $header-background
    .logo
      line-height 40px
      padding 0 15px
      color #fff
      float left
    .userInfo
      line-height 40px
      float right
      color #fff
      padding 0 50px
      .ivu-dropdown-rel a
        color #fff
</style>
