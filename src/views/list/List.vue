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
    <el-table border :data="list" v-loading="loading">
      <el-table-column prop="date" label="日期" sortable></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
      <el-table-column prop="tag" label="标签"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            close-transition>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
          <el-button type="text">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link action-more">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>禁用</el-dropdown-item>
                <el-dropdown-item>详情</el-dropdown-item>
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
      @pagination="getList" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      loading: true,
      total: 0,
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
      ],
      list: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      }]
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = false
    },
    handleQuery () {
      this.query.currentPage = 1
      this.getList()
    },
    handleAdd () {

    },
    handleDownload () {

    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
