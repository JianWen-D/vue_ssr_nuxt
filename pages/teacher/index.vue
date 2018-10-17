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
            <div class="page-one-r">
              <div class="form-box">
                <div class="form-item">
                  <input type="text" v-model="user.username" class="input-text" id="username" :placeholder="defaultInfo.username">
                </div>
                <div class="form-item">
                  <input type="password" v-model="user.password" class="input-text" id="password" :placeholder="defaultInfo.password">
                </div>
                <div class="form-item">
                  <div class="code-box">
                    <input type="text" v-model="user.code" class="input-code" id="code" :placeholder="defaultInfo.code">
                  </div>
                  <div class="chack-code-box" @click="getCode">
                    <img :src="codeImg" alt="" style="width: 100%;margin-top:3px;">
                  </div>
                </div>
                <div class="form-item">
                  <button class="btn primary long loginBtn" @click="subLogin">
                    {{defaultInfo.login}}
                  </button>
                  <button class="btn error long loginBtn" style="margin-top: 1rem;" @click="$router.push('/teacher/register')">
                    {{defaultInfo.goRegister}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-two">
      <div class="page-two-l">
        <img :src="`http://testmama.janvem.com/${info.ptwbgImage}`" alt="">
      </div>
      <div class="page-two-r">
        <h3>{{info.ptwMainTitle}}</h3>
        <p v-for="(item, index) in info.ptwList" :key="index">{{item.value}}</p>
        <button class="btn primary">{{info.ptwButtonText}}</button>
      </div>
    </div>
    <div class="page-three">
    <div class="container">
        <div class="row">
            <h3 class="title">
                {{info.pthMainTitle}}
            </h3>
            <p class="title-sec">
                {{info.pthSubTitle}}
            </p>
            <ul class="list">
                <li v-for="(item, index) in info.pthList" :key="index">
                    <i class="iconfont icon-diqiu"></i>
                    <p class="title">{{item.title}}</p>
                    <p class="text">{{item.content}}</p>
                </li>
            </ul>
        </div>
    </div>
</div>
  </div>

</template>

<script>
  import defaultInfo from './../../config/default'
  import config from './../../config'
  import {
    officalApi
  } from "./../../api";
  export default {
    name: 'home',
    data() {
      return {
        info: {},
        config: config,
        codeImg: '',
        defaultInfo: {},
        user: {
          username: '',
          password: '',
          code: ''
        }
      }
    },
    mounted() {
      if (sessionStorage.getItem('language') === 'en') {
        this.defaultInfo = defaultInfo.en
      } else {
        this.defaultInfo = defaultInfo.cn
      }
      officalApi.getHomeInfo(sessionStorage.getItem('language') || 'en').then(res => {
        this.info = res.data
      })
      this.getCode()
    },
    methods: {
      getCode () {
        officalApi.getCode().then(res => {
          this.codeImg = res.data
        })
      },
      subLogin () {
        if (this.user.code) {
          officalApi.teacherLogin(this.user).then(res => {
            sessionStorage.setItem('userId', res.data.info._id)
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~assets/public.less';
  @import '~assets/index/page-one.less';
  @import '~assets/index/page-two.less';
  @import '~assets/index/page-three.less';
</style>