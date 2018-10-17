<template>
  <div class="apply">
    <section class="page-one">
      <div class="img-box">
        <img :src="`~assets/91515478534_.pic_hd.jpg`" alt="">
      </div>
      <div class="container">
        <div class="row">
          <ul class="apply-nav">
            <li v-for="(item, index) in defaultInfo.applyStep" :key="index" :class="{'active': index === step}">
              <span>{{item}}</span>
            </li>
          </ul>
          <div class="form-box">
            <el-form ref="form" :model="info" label-width="80px">
              <el-form-item label="姓名">
                <el-row :gutter="20">
                  <el-col :span="7">
                    <el-input v-model="form.firstName"></el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-input v-model="form.middleName"></el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-input v-model="form.lastName"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                  <el-radio label="male">男</el-radio>
                  <el-radio label="female">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="出生年月">
                <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="爱好">
                <el-input v-model="form.hobby"></el-input>
              </el-form-item>
              <el-form-item label="邮箱地址">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="详细地址">
                <el-row :gutter="20">
                  <el-col :span="7">
                    <el-input v-model="form.country"></el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-input v-model="form.province"></el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-input v-model="form.city"></el-input>
                  </el-col>
                </el-row>
                <el-input v-model="form.address" style="margin-top: 10px;"></el-input>
              </el-form-item>
              <el-form-item label="最高学历">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-input v-model="form.highSchool"></el-input>
                  </el-col>
                  <el-col :span="12">
                    <el-input v-model="form.college"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="教学经历">
                <el-input type="textarea" :row="4" v-model="form.teachHistory"></el-input>
              </el-form-item>
              <el-form-item label="上课时间">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <span style="display:block;text-align: center;padding: 0 10px">上课时间</span>
                  </el-col>
                  <el-col :span="12">
                    <span style="display:block;text-align: center;padding: 0 10px">结束时间</span>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="星期一">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-time-picker v-model="form.classTime.MondayStart">
                    </el-time-picker>
                  </el-col>
                  <el-col :span="12">
                    <el-time-picker v-model="form.classTime.MondayEnd">
                    </el-time-picker>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="星期二">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-time-picker v-model="form.classTime.TuesDayStart">
                    </el-time-picker>
                  </el-col>
                  <el-col :span="12">
                    <el-time-picker v-model="form.classTime.TuesDayEnd">
                    </el-time-picker>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="星期三">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-time-picker v-model="form.classTime.WednesStart">
                    </el-time-picker>
                  </el-col>
                  <el-col :span="12">
                    <el-time-picker v-model="form.classTime.WednesEnd">
                    </el-time-picker>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="星期四">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-time-picker v-model="form.classTime.ThursdayStart">
                    </el-time-picker>
                  </el-col>
                  <el-col :span="12">
                    <el-time-picker v-model="form.classTime.ThursdayEnd">
                    </el-time-picker>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="星期五">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-time-picker v-model="form.classTime.FridayStart">
                    </el-time-picker>
                  </el-col>
                  <el-col :span="12">
                    <el-time-picker v-model="form.classTime.FridayEnd">
                    </el-time-picker>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="星期六">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-time-picker v-model="form.classTime.SaturdayStart">
                    </el-time-picker>
                  </el-col>
                  <el-col :span="12">
                    <el-time-picker v-model="form.classTime.SaturdayEnd">
                    </el-time-picker>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="星期日">
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-time-picker v-model="form.classTime.SundayStart">
                    </el-time-picker>
                  </el-col>
                  <el-col :span="12">
                    <el-time-picker v-model="form.classTime.SundayEnd">
                    </el-time-picker>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="个人简介">
                <el-input type="textarea" :row="4" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="了解渠道">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">立即提交</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="form-box">
            <el-form ref="form" :model="info" label-width="120px">
              <el-form-item label="上传自我介绍视频">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                  :show-file-list="false">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </section>
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
        defaultInfo: {},
        step: 0,
        form: {
          classTime: {}
        }
      }
    },
    mounted() {
      if (sessionStorage.getItem('language') === 'en') {
        this.defaultInfo = defaultInfo.en
      } else {
        this.defaultInfo = defaultInfo.cn
      }
      officalApi.getBaseInfo(sessionStorage.getItem('language') || 'en').then(res => {
        this.info = res.data
      })
      this.getStepInfo()
    },
    methods: {
      getStepInfo() {
        officalApi.getTeacherApplyStep(sessionStorage.getItem('userId')).then(res => {
          this.form = res.data
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~assets/public.less';
  @import '~assets/teacherApply/page-one.less';
</style>