<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem href="/home">主页</BreadcrumbItem>
      <BreadcrumbItem>联系人管理</BreadcrumbItem>
      <BreadcrumbItem>新增联系人</BreadcrumbItem>
    </Breadcrumb>

    <Form ref="formCreated" :model="formCreated" :rules="ruleCreated" :label-width="80" class="formCreated">
      <FormItem label="姓" prop="first_name">
        <Input type="text" v-model="formCreated.first_name" @keyup.13.native="handleSubmit('formCreated')"></Input>
      </FormItem>
      <FormItem label="名" prop="last_name">
        <Input type="text" v-model="formCreated.last_name" @keyup.13.native="handleSubmit('formCreated')"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <Input type="text" v-model="formCreated.email" @keyup.13.native="handleSubmit('formCreated')"></Input>
      </FormItem>
      <FormItem label="描述" prop="description">
        <Input type="text" v-model="formCreated.description" @keyup.13.native="handleSubmit('formCreated')"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" class="pull-right" @click="handleSubmit('formCreated')">提交</Button>
        <Button type="ghost" class="pull-right" @click="handleReset('formCreated')" style="margin-right: 8px">重置
        </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {createContact} from 'api/contacts'

  export default {
    data() {
      return {
        formCreated: {
          first_name: '',
          last_name: '',
          email: '',
          description: ''
        },
        ruleCreated: {
          first_name: [
            {required: true, message: '姓不能为空', trigger: 'blur'}
          ],
          last_name: [
            {required: true, message: '名不能为空', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
          ],
          description: [
            {required: true, message: '描述不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            createContact(this.formCreated).then(res => {
              if (res) {
                this.$Message.success('添加成功!')
                this.$refs[name].resetFields()
                this.$router.push('/contacts')
              }
            }).catch(err => {
              console.log(err)
            })
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .formCreated
    width 600px
    margin 100px auto

</style>
