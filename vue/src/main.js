import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'


import '@/assets/css/global.css'


const app = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus, {size: 'small',locale:zhCn})
    .mount('#app')

//createApp(App).use(store).use(router).use(ElementPlus,{locale,size:'small'}).mount('#app')