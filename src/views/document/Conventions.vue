<template>
  <div>
    <h1>代码规范</h1>
    <ul>
      <li>
        <a target="_blank" href="https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md">eslint的Standard Style</a>
      </li>
    </ul>
    <h1>命名规范</h1>
    <ul>
      <li>
        <p>camelCase（驼峰/小驼峰）: isStandard；</p>
        <p>PascalCase（帕斯卡）：IsStandard；</p>
        <p>kebab-case：is-isStandard；</p>
        <p>下划线：is_standard</p>
      </li>
      <li>views下文件夹小写，如：document</li>
      <li>vue文件：PascalCase，如：Login.vue</li>
      <li>js、scss文件等：kebab-case，如：roles-permission.js</li>
      <li>js相关的：camelCase；css相关的：kebab-case</li>
      <li>vue文件内：import的组件命名PascalCase，template内使用时kebab-case;</li>
      <li>路由文件内：component和name使用PascalCase</li>
      <li>store 中的Mutation 使用 全部大写的下划线命名法</li>
      <li>
        <a href="https://www.cnblogs.com/xkloveme/p/7743091.html" target="_black">
        参考文章</a>
      </li>
    </ul>
    <h1>vue方法放置顺序</h1>
    <ul>
      <li>components</li>
      <li>props</li>
      <li>data</li>
      <li>mixins</li>
      <li>created</li>
      <li>mounted</li>
      <li>activited</li>
      <li>update</li>
      <li>beforeRouteUpdate</li>
      <li>methods</li>
      <li>filters</li>
      <li>computed</li>
      <li>watch</li>
    </ul>
    <h1>接口数据格式</h1>
    <ul>
      <li>
        json类型：
      {
        code: 0,
        message: 'OK',
        data: {
          id: 110,
          name: '我是110',
          age: 20
        }
      }
      </li>
      <li>
        array类型：
      {
        code: 0,
        message: 'OK',
        data: {
          list: [
            {
              id: 110,
              name: '我是110',
              age: 20
            },
            {
              id: 119,
              name: '我是119',
              age: 21
            }
          ]
        }
      }
      </li>
      <li>
        分页类型：
      code: 0, // 0表示成功，非0待定义
      message: 'OK'，
      data: {
        currentPage: 1,
        total: 15, // 总条数
        pageSize: 10, // 一页显示的条数
        pages: 2, // 总页数
        list: [
          {
            id: 110,
            name: '我是110',
            age: 20
          },
          {
            id: 119,
            name: '我是119',
            age: 21
          }
        ]
      }
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
li {
  margin-bottom: 20px;
  p {
    line-height: 26px;
  }
}
</style>
