<template>
  <div>
    <Modal v-model="confirm" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>删除确认</span>
      </p>
      <div style="text-align:center">
        <p>{{info}}</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="confirm_loading" @click="del">删除</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        confirm: false,
        id: '',
        index: '',
        confirm_loading: false
      }
    },
    props: ['info'],
    methods: {
      del() {
        this.confirm_loading = true
        this.$emit('confirm', this.id, this.index)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
