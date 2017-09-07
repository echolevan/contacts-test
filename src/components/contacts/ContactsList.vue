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

    <!--编辑组件-->
    <Modal v-model="edit">
      <p slot="header">
        <span>编辑联系人</span>
      </p>
      <v-contact-form ref="contactForm" v-on:checkSubmit="checkSubmit"></v-contact-form>
      <div slot="footer">
        <Button type="primary" :loading="modal_loading" @click="handleSubmit('formCreated')">保存</Button>
      </div>
    </Modal>

    <!--确认删除-->
    <v-confirm ref='vConfirm' :info="confirmInfo" v-on:confirm="confirm"></v-confirm>
  </div>
</template>

<script>
  import {getContactsList, getContact, editContact, delContact} from 'api/contacts'
  import ContactForm from './ContactForm'
  import Confirm from '../common/Confirm'

  export default {
    name: 'contactList',
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
                  },
                  on: {
                    click: () => {
                      this._edit(params.index)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this._del(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        modal_loading: false,
        edit: false,
        edit_id: 0,
        edit_index: 0,
        confirmInfo: ''
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
      },
      _edit(index) {
        getContact(this.list[index].id).then(res => {
          this.$refs.contactForm.handleReset('formCreated')
          if (res) {
            this.edit_id = res.data.id
            this.edit_index = index
            this.$refs.contactForm.formCreated = res.data
            this.edit = true
          }
        }).catch(err => {
          console.log(err)
        })
      },

      handleSubmit(name) {
        this.modal_loading = true
        this.$refs.contactForm.handleSubmit(name)
      },

      checkSubmit(v) {
        if (v) {
          editContact(this.edit_id, this.$refs.contactForm.formCreated).then(res => {
            if (res) {
              this.$Message.success(res.data.message)
              this._init()
              this.edit = false
            }
          }).catch(err => {
            console.log(err)
          })
        }
        this.modal_loading = false
      },

      _del(index) {
        this.confirmInfo = `确定删除联系人：${this.list[index].first_name} ${this.list[index].last_name} 吗？`
        this.$refs.vConfirm.id = this.list[index].id
        this.$refs.vConfirm.index = index
        this.$refs.vConfirm.confirm = true
      },

      confirm(id, index) {
        delContact(id).then(res => {
          if (res) {
            this.$Message.success(res.data.message)
            this.$refs.vConfirm.confirm = false
            this.list.splice(index, 1)
          }
        }).catch(err => {
          console.log(err)
        })
        this.$refs.vConfirm.confirm_loading = false
      }
    },
    components: {
      'v-contact-form': ContactForm,
      'v-confirm': Confirm
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .created_button
    margin-bottom 30px

</style>
