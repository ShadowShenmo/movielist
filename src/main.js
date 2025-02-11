// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import 'uno.css'; // 引入 UnoCSS 样式

const app = createApp(App);
app.use(router);
app.mount('#app');
