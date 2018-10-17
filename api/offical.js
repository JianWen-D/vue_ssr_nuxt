import ajax from './config'

export default {
  // 获取网站基本信息
  getBaseInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/baseInfo', 'get', params)
  },
  // 获取首页信息
  getHomeInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/homeInfo', 'get', params)
  },
  // 获取首页信息
  getAboutInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/aboutInfo', 'get', params)
  },
  // 获取新首页信息
  getNewHomeInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/newHomeInfo', 'get', params)
  },
  // 获取产品信息
  getProductInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/productInfo', 'get', params)
  },
  // 获取产品信息
  getCampsInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/campsInfo', 'get', params)
  },
  // 获取产品信息
  getReadingInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/readingInfo', 'get', params)
  },
  // 获取faq信息
  getFaqInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/faqInfo', 'get', params)
  },
  // 获取产品信息
  getProductInfo: (language) => {
    const params = {
      language: language
    }
    return ajax('/offical/ProductInfo', 'get', params)
  },
  // 获取code
  getCode: () => {
    const params = {
      width: 82,
      height: 35
    }
    return ajax('/codeImg', 'get', params)
  },
  // 获取code
  teacherLogin: (params) => {
    return ajax('/teacherLogin', 'get', params)
  },
  // 获取code
  teacherRegister: (params) => {
    return ajax('/teacherRegister', 'post', params)
  },
  // 获取教师报名步骤信息
  getTeacherApplyStep: (id) => {
    const params = {
      id: id
    }
    return ajax('/offical/teacherApplyStep', 'get', params)
  },
}