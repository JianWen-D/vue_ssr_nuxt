<template>
  <div>
    <header-page :baseInfo="baseInfo"></header-page>
    <nuxt/>
    <footer-page :baseInfo="baseInfo"></footer-page>
  </div>
</template>

<script>
  import headerPage from './../components/headerPage'
  import footerPage from './../components/footerPage'
  import {
    officalApi
  } from "./../api"
export default {
  name: 'layouts',
  data () {
    return {
      baseInfo: {}
    }
  },
  mounted () {
    officalApi.getBaseInfo(sessionStorage.getItem('language') || 'en').then(res => {
      this.baseInfo = res.data
    })
  },
  components: {
    headerPage,
    footerPage
  }
}
</script>


<style lang="less">
  body, html, div, ul, li, p, span {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
</style>
