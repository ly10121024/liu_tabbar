import jmhcTabbar from "./src/components/tabbar.vue"
const tabbar = {
    install(Vue, options) {
        Vue.component("jmhc-tabbar", jmhcTabbar)
    }
};

// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(tabbar) 
}
export default tabbar