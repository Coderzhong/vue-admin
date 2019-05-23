<template>
  <div>
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
        <el-menu-item
          v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)"
          :index="resolvePath(onlyOneChild.path)"
        >
          <i :class="`fa fa-${onlyOneChild.meta.icon || (item.meta&&item.meta.icon)}`"></i>
          <span slot="title">{{onlyOneChild.meta.title}}</span>
        </el-menu-item>
    </template>

    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title" v-if="item.meta">
        <i :class="`fa fa-${item.meta && item.meta.icon}`"></i>
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild (children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style lang="scss" scoped>
  i.fa + span {
    margin-left: 8px;
  }
</style>
