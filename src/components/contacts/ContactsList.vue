<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem href="/home">主页</BreadcrumbItem>
      <BreadcrumbItem>联系人管理</BreadcrumbItem>
      <BreadcrumbItem>联系人列表</BreadcrumbItem>
    </Breadcrumb>
    <router-link to="/contact">
      <Button type="primary" class="pull-right created_button">
        创建新联系人
      </Button>
    </router-link>
    <div style="clear: both"></div>
    <Table :columns="columns" :data="list"></Table>
  </div>
</template>

<script>
  import {getContactsList} from 'api/contacts'

  export default {
    data() {
      return {
        list: [],
        columns: [
          {
            title: '姓',
            key: 'first_name'
          },
          {
            title: '名',
            key: 'last_name'
          },
          {
            title: '邮箱',
            key: 'email'
          },
          {
            title: '描述',
            key: 'description'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  }
                }, '删除')
              ])
            }
          }
        ]
      }
    },
    mounted() {
      this._init()
    },
    methods: {
      _init() {
        getContactsList().then(res => {
          this.list = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .created_button
    margin-bottom 30px

</style>
