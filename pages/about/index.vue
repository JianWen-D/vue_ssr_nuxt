<template>
  <div class="faq">
    <div class="page-two-a editor">
      <div class="container">
          <div class="row">
            <h1 class="title">关于我们</h1>
              <div v-html="info.text"></div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import { officalApi } from "./../../api";
export default {
  name: 'faq',
  data () {
    return {
      info: {},
      active: 0,
      activeItem: 0,
      group: {}
    }
  },
  mounted () {
    officalApi.getAboutInfo(sessionStorage.getItem('language') || 'en').then(res => {
      this.info = res.data
    })
  },
  methods: {
    changeGroup (index) {
      this.active = index
      this.group = this.info.list[index]
    }
  }
}
</script>

<style lang="less">
  @import '~assets/public.less';
  // @import '~assets/about/page-one.less';
  @import '~assets/about/editor.less';
  @import '~assets/about/page-two.less';
</style>
