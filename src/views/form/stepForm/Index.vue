<template>
  <div class="steps-wrapper">
    <el-steps :active="active" finish-status="success">
      <el-step title="第一步"></el-step>
      <el-step title="第二步"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <div class="content">
      <step1 v-if="active === 1" @nextStep="nextStep" />
      <step2 v-if="active === 2" @nextStep="nextStep" @prevStep="prevStep" />
      <step3 v-if="active === 3" @prevStep="prevStep" @finish="finish" />
    </div>
  </div>
</template>

<script>
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default {
  name: '',
  components: {
    Step1,
    Step2,
    Step3
  },
  data () {
    return {
      active: 1
    }
  },
  mounted () {
  },
  methods: {
    nextStep () {
      // console.log(this.active)
      if (this.active < 3) {
        this.active += 1
        console.log(this.active)
      }
    },
    prevStep () {
      if (this.active > 1) {
        this.active -= 1
      }
    },
    finish () {
      this.active = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.steps-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-steps {
    width: 100%;
    max-width: 600px;
  }
  .content {
    margin-top: 40px;
    width: 100%;
    max-width: 500px;
  }
}
</style>
