<template>
  <div class="student-login">
    <div class="page-one">
    <div class="container">
        <div class="row">
            <div class="page-one-box">
                <div class="img-box">
                    <img :src="`http://testmama.janvem.com/${baseInfo.loginImage}`" alt="">
                </div>
                <div class="login-box">
                    <p class="title">{{defaultInfo.login}}</p>
                    <div class="form">
                        <div class="form-item">
                            <input type="text" :placeholder="defaultInfo.username" id="username">
                        </div>
                        <div class="form-item">
                            <input type="password" :placeholder="defaultInfo.password" id="password">
                        </div>
                        <div class="form-item">
                            <div class="code-box">
                                <input type="text" id="code" class="input-code" :placeholder="defaultInfo.code">
                            </div>
                            <div class="chack-code-box" id="get-code">
                                <img :src="codeImg" alt="">
                            </div>
                        </div>
                        <div class="form-item">
                            <button class="error loginBtn">{{defaultInfo.login}}</button>
                        </div>
                        <div class="form-item">
                            <p>{{defaultInfo.forget}}<a href="#">  {{defaultInfo.password}}</a>?</p>
                        </div>
                        <div class="form-item">
                            <button class="info"><a href="/register" style="color:#fff">{{defaultInfo.goRegister}}</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import defaultInfo from './../../config/default'
import config from './../../config'
import { officalApi } from "./../../api";
export default {
  name: 'student-login',
  data () {
    return {
      baseInfo: {},
      config: config,
      defaultInfo: {},
      codeImg: ''
    }
  },
  mounted () {
    if (sessionStorage.getItem('language') === 'en') {
        this.defaultInfo = defaultInfo.en
    } else {
        this.defaultInfo = defaultInfo.cn
    }
    officalApi.getBaseInfo(sessionStorage.getItem('language') || 'en').then(res => {
      this.baseInfo = res.data
    })
    this.getCode()
  },
  methods: {
    getCode () {
        officalApi.getCode().then(res => {
            this.codeImg = res.data
        })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/public.less';
  @import '~assets/login/page-one.less';
</style>
