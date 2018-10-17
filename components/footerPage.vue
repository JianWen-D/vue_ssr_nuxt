<template>
  <footer class="footer">
      <a href="/about">
          <span>{{baseInfo.about}}</span>
          <!-- <span>Contact us<%= baseInfo[0].copyRight%></span> -->
      </a>
      <p>© {{baseInfo.copyRight}}</p>
      <a href="http://www.miibeian.gov.cn/">粤ICP备18090820号-1</a>
  </footer>
</template>

<script>
export default {
  name: 'footerPage',
  props: {
    baseInfo: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
    padding: 50px 0;
    background-color: #3b404c;
    color: #999;
    text-align: center;
    line-height: 40px;
    a {
      color: #999;
    }
}
</style>
