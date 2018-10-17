<template>
  <div class="faq">
    <div class="page-one">
      <div class="header-banner">
          <div class="box">
              <h2>{{info.mainTitle}}</h2>
              <p>{{info.subTitle}}</p>
          </div>
      </div>
    </div>
    <div class="page-two">
      <div class="container">
          <div class="row">
              <div class="l-side">
                  <ul>
                      <li :class="{'active': index === active}" v-for="(item, index) in info.list" :key="index" @click="changeGroup(index)">{{item.title}}</li>
                  </ul>
              </div>
              <div class="r-side">
                  <div class="list-box">
                      <p class="title">{{group.title}}</p>
                      <ul class="list">
                          <li v-for="(item, index) in group.list" :key="index" @click="activeItem = index">
                              <p class="li-title">{{item.title}}<i class="iconfont icon-xiangxia"></i></p>
                              <div class="text" :style="`display: ${index === activeItem ? 'block' : 'none'}`">
                                  {{item.content}}
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
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
    officalApi.getCampsInfo(sessionStorage.getItem('language') || 'en').then(res => {
      this.info = res.data
      this.group = res.data.list[0] || {'title': ''}
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

<style lang="less" scoped>
  @import '~assets/public.less';
  @import '~assets/camps/page-one.less';
  @import '~assets/camps/page-two.less';
</style>
