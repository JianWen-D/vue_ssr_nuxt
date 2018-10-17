<template>
  <div class="home">
    <div class="page-one">
      <div class="bg" :style="`background-image:url(http://testmama.janvem.com/${info.pobgImage})`">
        <img :src="`http://testmama.janvem.com/${info.pobgImage}`" alt="">
      </div>
      <div class="page-one-box">
        <div class="container">
          <div class="row">
            <div class="page-one-l">
              <div class="title">
                <h2>
                  {{info.ponMainTitleOne}}
                </h2>
                <h2>
                  {{info.ponMainTitleTwo}}
                </h2>
              </div>
              <div class="title-sec">
                <p>
                  {{info.ponSubTitleOne}}
                </p>
                <p>
                  {{info.ponSubTitleTwo}}
                </p>
              </div>
              <button class="btn primary">
                {{info.ponButtonText}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-three">
      <div class="container">
        <div class="row">
          <h3 class="title">
            {{info.ptwMainTitle}}
          </h3>
          <p class="title-sec">
            {{info.ptwSubTitle}}
          </p>
          <ul class="list">
            <li v-for="(item, index) in info.ptwList" :key="index">
              <i class="iconfont icon-diqiu"></i>
              <p class="title">{{item.title}}</p>
              <p class="text">{{item.content}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="page-four">
      <div class="bg" :style="`background-image:url(http://testmama.janvem.com/1525792133000.png)`">
        <img :src="`http://testmama.janvem.com/1525792133000.png`" alt="">
      </div>
      <div class="page-four-box">
        <div class="container">
          <div class="row">
            <div class="page-four-l">
              <div class="title">
                <h2>
                  {{info.pthMainTitle}}
                </h2>
              </div>
              <p v-for="(item, index) in info.pthList" :key="index">{{item.value}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-five">
      <div class="page-five-box">
        <div class="container">
          <div class="row">
            <div class="title">
              <h2>
                {{productInfo.mainTitle}}
              </h2>
            </div>
            <ul class="group-list">
              <li v-for="(item, index) in productInfo.list" :key="index" :class="{'active': index === groupActive}">{{item.title}}</li>
            </ul>
            <ul class="list">
              <li v-for="(item, index) in productList" :key="index">
                <img :src="`http://testmama.janvem.com/${item.img}`" alt="">
                <p>{{item.desc}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>

</template>

<script>
  import config from './../config'
  import {
    officalApi
  } from "./../api";
  export default {
    name: 'home',
    data() {
      return {
        info: {},
        productInfo: {},
        productList: [],
        config: config,
        groupActive: 0
      }
    },
    mounted() {
      officalApi.getNewHomeInfo(sessionStorage.getItem('language') || 'en').then(res => {
        this.info = res.data
      })
      officalApi.getProductInfo(sessionStorage.getItem('language') || 'en').then(res => {
        this.productInfo = res.data
        this.productList = res.data.list[0].list
      })
      if (!sessionStorage.getItem('language')) {
        sessionStorage.setItem('language', 'en')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~assets/public.less';
  @import '~assets/newHome/page-one.less';
  @import '~assets/newHome/page-two.less';
  @import '~assets/newHome/page-three.less';
  // @import '~assets/newHome/page-four.less';
  // @import '~assets/newHome/page-five.less';
</style>