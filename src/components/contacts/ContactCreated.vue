<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem href="/home">主页</BreadcrumbItem>
      <BreadcrumbItem>联系人管理</BreadcrumbItem>
      <BreadcrumbItem>新增联系人</BreadcrumbItem>
    </Breadcrumb>

    <v-contact-form ref="contactForm" class="createdDiv" v-on:checkSubmit="checkSubmit"></v-contact-form>
    <Button type="primary" class="pull-right" @click="handleSubmit('formCreated')">提交</Button>
    <Button type="ghost" class="pull-right" @click="handleReset('formCreated')" style="margin-right: 8px">重置</Button>
  </div>
</template>

<script>
  import {createContact} from 'api/contacts'
  import ContactForm from './ContactForm'

  export default {
    name: 'contactCreated',
    data() {
      return {}
    },
    methods: {
      handleSubmit(name) {
        this.$refs.contactForm.handleSubmit(name)
      },
      handleReset(name) {
        this.$refs.contactForm.handleReset(name)
      },
      checkSubmit(v) {
        if (v) {
          createContact(this.$refs.contactForm.formCreated).then(res => {
            if (res) {
              this.$Message.success('添加成功!')
              this.$router.push('/contacts')
            }
          }).catch(err => {
            console.log(err)
          })
        }
      }
    },
    components: {
      'v-contact-form': ContactForm
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .createdDiv
    padding-top 100px
</style>
