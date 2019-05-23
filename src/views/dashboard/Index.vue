<template>
  <div class="dashbord">
    <el-row :gutter="20">
      <el-col :sm="12" :md="6">
        <count className="red" icon="rmb"
          title="销售额" :value="123456" />
      </el-col>
      <el-col :sm="12" :md="6">
        <count type="progress" className="blue" icon="paper-plane"
          title="运营效果" :value="70" />
      </el-col>
      <el-col :sm="12" :md="6">
        <count className="green" icon="truck"
          title="库存" :value="65345" />
      </el-col>
      <el-col :sm="12" :md="6">
        <count className="yellow" icon="users"
          title="用户数" :value="86542" />
      </el-col>
    </el-row>
    <el-row  v-action:profit>
      <el-col :sm="24">
        <el-card>
          <div slot="header" class="clearfix">
            <span>利润分析（仅admin可见）</span>
            <el-button type="text" class="fr card-action">操作</el-button>
          </div>
          利<br/>润<br/>分<br/>析<br/>报<br/>表<br/>···
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="24">
        <el-card>
          <div slot="header" class="clearfix">
            <span>销售额</span>
            <el-button type="text" class="fr card-action">操作</el-button>
          </div>
          <line-chart class="line-chart"/>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>区域占比</span>
            <el-button type="text" class="fr card-action">操作</el-button>
          </div>
          <pie-chart/>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>销售量</span>
            <el-button type="text" class="fr card-action">操作</el-button>
          </div>
          <bar-chart/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Count from './components/Count'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
export default {
  name: '',
  components: {
    Count,
    LineChart,
    PieChart,
    BarChart
  },
  data () {
    return {
      options: null
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/size-variables.scss';
.dashbord {
  margin: -$app-container-padding;
  background: #f0f2f5;
}
.el-row {
  .el-col {
    margin-bottom: 24px;
  }
}
.el-card__header {
  .card-action {
    padding: 4px 0;
  }
}
</style>
