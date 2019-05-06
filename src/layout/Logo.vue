<template>
  <div class="logo-wrapper">
    <a href="#" class="logo-link">
      <img src="@/assets/logo.png" alt="logo">
      <h1 v-show="!isCollapse">Vue Admin</h1>
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  computed: {
    ...mapState('app', {
      isCollapse: state => state.sidebar.isCollapse
    })
  },
  methods: {
    login () {
      this.$router.push({ path: '/dashboard' })
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/color-variables.scss';
.logo-wrapper {
  background-color: $menu-bg-color;
  .logo-link {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    img {
      width: 24px;
      height: 24px;
    }
    h1 {
      margin-left: 20px;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
