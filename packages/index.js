import ali_010841 from './ali_010841'
import ali_010845 from './ali_010845'
import ali_011807 from './ali_011807'
import ali_031829 from './ali_031829'



// 存储组件列表
const components = [
    ali_010841,
    ali_010841.bank10,
    ali_010845,
    ali_010845.kline,
    ali_010845.market_history,
    ali_010845.timeline,
    ali_010845.index_timeline,
    ali_010845.real_stockinfo,
    ali_011807,
    ali_011807.channel,
    ali_031829,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const apishow = install
export {
    apishow,
    // 以下是具体的组件列表
    ali_010841,
    ali_010845,
    ali_011807,
    ali_031829,
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
}