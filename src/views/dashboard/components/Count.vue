<template>
  <div>
    <el-card>
      <div class="count-header" :class="className">
        <i class="count-icon" :class="`fa fa-${icon}`"></i>
        <p class="count-title">{{ title }}</p>
      </div>
      <div class="count-content">
        <el-progress v-if="type === 'progress'"
        :percentage="value" :stroke-width="10" />
        <count-to v-else
          :endVal="value" :duration="1500" class="count-to" />
      </div>
    </el-card>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  props: {
    className: {
      required: true
    },
    icon: {
      required: true
    },
    title: {
      required: true
    },
    value: {
      required: true
    },
    type: {
      default: 'count'
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$red: #f24d6c;
$green: #3cd2a7;
$blue: #1790ff;
$yellow: #f5c122;

.el-card:hover {
  .red {
    .count-icon {
      color: #fff;
      background: $red;
    }
  }
  .blue {
    .count-icon {
      color: #fff;
      background: $blue;
    }
  }
  .green {
    .count-icon {
      color: #fff;
      background: $green;
    }
  }
  .yellow {
    .count-icon {
      color: #fff;
      background: $yellow;
    }
  }
}
.count-header {
  display: flex;
  margin-bottom: 4px;
  .count-icon {
    border-radius: 4px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 50px;
    transition: all .5s;
  }
  .count-title {
    margin-left: 14px;
    line-height: 80px;
  }
  &:hover {
    .count-icon {
      color: #fff !important;
    }
  }
  &.red {
    .count-icon {
      font-size: 60px;
      color: $red;
    }
  }
  &.blue {
    .count-icon {
      color: $blue;
    }
  }
  &.green {
    .count-icon {
      color: $green;
    }
  }
  &.yellow {
    .count-icon {
      color: $yellow;
    }
  }
}

.count-content {
  height: 36px;
}

.count-to {
  display: block;
  text-align: center;
  font-size: 26px;
}

.el-progress {
  top: 10px;
}
</style>
