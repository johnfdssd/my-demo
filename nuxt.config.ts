// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    token: process.env.STRAPI_TOKEN || '64bd45551ffce6445bd04b1a1e9a06b68d48c6809bc0dbd5d5a546b47e7fdce386856b03f147aafd61d21a9c4654b4f97027d17d1af3abbe6c21f147fbdf8449f2161f98e1e2bca1fdaab2dd32314426e4cafccda7113f0a596e799bd1c6149d525b0a416f25020620661a1bf2c9ca10a4327f4e9e0e2a390a0138e91234a6fe',
    prefix: '/api',
    admin: '/admin',
    version: 'v5',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  
  // 设置静态生成
  ssr: true,
  target: 'static', 
  nitro: {
    // preset: 'vercel'
    // static:true
    preset: 'static', // 明确指定静态预设
  },
  prerender: {
    // 预渲染的路由
    routes: ['/','/blog','/blog/:id'], 
    crawlLinks: true // 自动爬取链接生成静态页
  }
  // 如果有使用 API，建议设置 routeRules
  // routeRules: {
  //   '/api/**': { cors: true }
  // }
})