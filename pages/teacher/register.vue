<template>
  <div class="teacher-register">
    <div class="page-one">
    <div class="container">
        <div class="row">
            <div class="page-one-box">
                <div class="img-box">
                    <img :src="`http://testmama.janvem.com/${baseInfo.registerImage}`" alt="">
                </div>
                <div class="register-box">
                    <p class="title">{{defaultInfo.register}}</p>
                    <div class="form">
                        <div class="form-item">
                            <input type="text" id="username" :placeholder="defaultInfo.username">
                        </div>
                        <div class="form-item">
                            <input type="password" id="password" :placeholder="defaultInfo.password">
                        </div>
                        <div class="form-item">
                            <input type="password" id="again-password" :placeholder="defaultInfo.againPassword">
                        </div>
                        <div class="form-item">
                            <div class="code-box">
                                <input type="text" id="code" class="input-code" :placeholder="defaultInfo.code">
                            </div>
                            <div class="chack-code-box" id="get-code">
                                {{defaultInfo.getCode}}
                            </div>
                        </div>
                        <div class="form-item">
                            <button class="error register-btn">{{defaultInfo.register}}</button>
                        </div>
                        <div class="form-item">
                            <button class="info"><a href="/teacher" style="color:#fff">{{defaultInfo.goLogin}}</a></button>
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
  @import '~assets/register/page-one.less';
</style>
