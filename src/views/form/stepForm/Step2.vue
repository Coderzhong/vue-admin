<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="字段5" prop="field5">
        <el-input v-model="ruleForm.field5"></el-input>
      </el-form-item>
      <el-form-item label="字段6" prop="field6">
        <el-input v-model="ruleForm.field6"></el-input>
      </el-form-item>
      <el-form-item label="字段7" prop="field7">
        <el-input v-model="ruleForm.field7"></el-input>
      </el-form-item>
      <el-form-item label="字段8" prop="field8">
        <el-input v-model="ruleForm.field8"></el-input>
      </el-form-item>
      <el-form-item class="button-wrapper">
        <el-button type="primary" :loading="loading" @click="nextStep">提交</el-button>
        <el-button @click="prevStep">上一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      loading: false,
      ruleForm: {
        field5: '555',
        field6: '666',
        field7: '777',
        field8: '888'
      },
      rules: {
        field5: [
          { required: true, message: '请输入字段5', trigger: 'blur' }
        ],
        field6: [
          { required: true, message: '请输入字段6', trigger: 'blur' }
        ]
      },
      timer: null
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  methods: {
    nextStep () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.timer = setTimeout(() => {
            this.loading = false
            this.$emit('nextStep')
          }, 1500)
        } else {
          console.log('error')
          this.loading = false
          return false
        }
      })
    },
    prevStep () {
      this.$emit('prevStep')
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  text-align: center;
}
</style>
