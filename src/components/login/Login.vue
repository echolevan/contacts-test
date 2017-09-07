<template>
  <div class="login content">
    <Form class="formLogin" ref="formLogin" :model="formLogin" :rules="ruleLogin" :label-width="80">
      <h1>contacts管理系统</h1>
      <FormItem label="邮箱" prop="email">
        <Input type="text" v-model="formLogin.email"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="formLogin.password"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formLogin')" class="pull-right">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    data() {
      return {
        formLogin: {
          email: '',
          password: ''
        },
        ruleLogin: {
          email: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      ...mapState([
        'isLogin'
      ])
    },
    mounted() {
      if (this.isLogin) {
        this.$router.push('/home')
      }
    },
    methods: {
      ...mapActions([
        'toSetLogin'
      ]),
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.toSetLogin(this.formLogin).then(res => {
              this.$Message.success('登录成功!')
              this.$router.push('/home')
            })
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .login.content
    position absolute
    width 100%
    height 100%
    left 0
    top 0
    display flex
    padding 0 !important
    justify-content center
    .formLogin
      padding-top 100px
      width 500px
      h1
        text-align center
        font-size $font-size-large
        font-weight bold
        padding 50px 0
</style>
