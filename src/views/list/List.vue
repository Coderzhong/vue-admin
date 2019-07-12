<template>
  <div>
    <div class="query-box">
      <el-form inline>
        <el-form-item>
          <el-input v-model="query.number" placeholder="产品编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="query.origin" placeholder="产地">
            <el-option v-for="item in origin" :key="item.value"
              :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="query.date"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="出厂日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="handleQuery">查询</el-button>
          <el-button type="primary" icon="el-icon-edit" @click="handleAdd">新增</el-button>
          <el-button type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table border size="small" :data="list" v-loading="loading">
      <el-table-column prop="name" label="产品名称"></el-table-column>
      <el-table-column prop="number" label="产品编号"></el-table-column>
      <el-table-column prop="origin" label="产地"></el-table-column>
      <el-table-column prop="date" label="出厂日期" sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="text">详情</el-button>
          <el-button type="text">编辑</el-button>
          <el-button type="text">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link action-more">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>删除</el-dropdown-item>
                <el-dropdown-item>禁用</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total > 0"
      :total="total"
      :page.sync="query.currentPage"
      :limit.sync="query.pageSize"
      @pagination="handleGetList" />
  </div>
</template>

<script>
import { getList } from '@/api/list'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      loading: true,
      total: 0,
      list: [],
      query: {
        number: '',
        date: null,
        origin: '',
        currentPage: 1,
        pageSize: 10
      },
      origin: [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' }
      ]
    }
  },
  mounted () {
    this.handleGetList()
  },
  methods: {
    handleGetList () {
      this.loading = true
      this.list = []
      getList(this.query).then(res => {
        this.loading = false
        const { code, data: { total, list } } = res
        if (code === 0) {
          this.total = total
          this.list = list
        } else {
          this.total = 0
        }
      })
    },
    handleQuery () {
      this.query.currentPage = 1
      this.handleGetList()
    },
    handleAdd () {
    },
    handleDownload () {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
