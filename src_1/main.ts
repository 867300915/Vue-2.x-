1 vite项目中，indexedDB.html是项目的入口文件，在项目最外层。
2 加载index.html后，vite解析<script type="module" src="xxx"></script>指向的Javascript。
3 Vue3中是通过createApp函数创建一个应用实例。


//引入createApp用来创建应用
import { createApp } from "vue";
// 引入App根组件
import App from "./App.vue";

createApp(App).mount("#app");