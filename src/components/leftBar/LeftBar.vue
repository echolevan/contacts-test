<template>
  <div>
    <Menu theme="dark" active-name="1">
      <MenuGroup title="主页">
        <MenuItem name="1">
          <Icon type="document-text"></Icon>
          主页
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="联系人管理">
        <MenuItem name="3">
          <Icon type="person-stalker"></Icon>
          联系人列表
        </MenuItem>
        <MenuItem name="4">
          <Icon type="plus-round"></Icon>
          新增联系人
        </MenuItem>
        <MenuItem name="5">
          <Icon type="edit"></Icon>
          编辑联系人
        </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'leftBar',
    data () {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ivu-menu
    position: absolute;
    left: 0;
    top: 0;
    padding-top  40px
    z-index: 3;
    overflow-y: auto;
    height: 100%;
</style>
