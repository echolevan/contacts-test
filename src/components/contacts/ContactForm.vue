<template>
  <div>
    <Form ref="formCreated" :model="formCreated" :rules="ruleCreated" :label-width="80" class="formCreated">
      <FormItem label="姓" prop="first_name">
        <Input v-model.trim="formCreated.first_name" @keyup.13.native="handleSubmit('formCreated')"></Input>
      </FormItem>
      <FormItem label="名" prop="last_name">
        <Input v-model.trim="formCreated.last_name" @keyup.13.native="handleSubmit('formCreated')"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <Input v-model.trim="formCreated.email" @keyup.13.native="handleSubmit('formCreated')"></Input>
      </FormItem>
      <FormItem label="描述" prop="description">
        <Input v-model.trim="formCreated.description" @keyup.13.native="handleSubmit('formCreated')"></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'contactForm',
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
            this.$emit('checkSubmit', true)
          } else {
            this.$Message.error('表单验证失败!')
            this.$emit('checkSubmit', false)
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
    max-width 600px
    margin 0 auto

</style>
