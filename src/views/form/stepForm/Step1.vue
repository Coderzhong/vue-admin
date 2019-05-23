<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="字段1" prop="field1">
        <el-input v-model="ruleForm.field1"></el-input>
      </el-form-item>
      <el-form-item label="字段2" prop="field2">
        <el-input v-model="ruleForm.field2"></el-input>
      </el-form-item>
      <el-form-item label="字段3" prop="field3">
        <el-input v-model="ruleForm.field3"></el-input>
      </el-form-item>
      <el-form-item label="字段4" prop="field4">
        <el-input v-model="ruleForm.field4"></el-input>
      </el-form-item>
      <el-form-item class="button-wrapper">
        <el-button type="primary" @click="nextStep">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        field1: '111',
        field2: '222',
        field3: '333',
        field4: '444'
      },
      rules: {
        field1: [
          { required: true, message: '请输入字段1', trigger: 'blur' }
        ],
        field2: [
          { required: true, message: '请输入字段2', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    nextStep () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$emit('nextStep')
        } else {
          console.log('error')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  text-align: center;
}
</style>
