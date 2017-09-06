<template>
    <div>
      <div class="nav">
        <div class="userInfo">
          <Dropdown>
            <a href="javascript:void(0)">
              Levan
              <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>编辑信息</DropdownItem>
              <DropdownItem>退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
</template>

<script>
 export default {
   name: 'header',
   data () {
     return {

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
    .userInfo
      line-height 40px
      float right
      color #fff
      padding 0 50px
      .ivu-dropdown-rel a
        color #fff
</style>
