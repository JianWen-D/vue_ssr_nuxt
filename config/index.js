
const config = {  
  // 开发环境
  dev: {
    serverUrl: 'http://localhost:3001',
    // assestUrl: 'http://localhost:3002/uploadFile/',
    iconfontUrl: '//at.alicdn.com/t/font_527036_8kh4mk1gkz9f6r.css'
  },
  // 生产环境
  pro: {
    serverUrl: 'http://47.91.208.53:3001',
    // assestUrl: 'http://localhost:3001/uploadFile/',
    iconfontUrl: '//at.alicdn.com/t/font_527036_8kh4mk1gkz9f6r.css'
  }
}

export default process.env.NODE_ENV === 'development' ? config.dev : config.pro
