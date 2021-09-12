let Vue;
// Vue插件的编写
// 实现一个install方法
class VueRouter {
  constructor(options) {
    this.$options=options;

    // 保存当前hash到current
    // current应该是响应式
    // Vue.set(this,'current','/') 要求this本身是响应式
    // Object.defineProperty() 只是拦截 没有依赖
    // 给制定对象定义响应式属性
    Vue.util.defineReactive(this,'current',window.location.hash.slice(1) || '/')
    

    // 监控hashchange
    window.addEventListener('hashchange',()=>{
       // #/about => /about
       this.current=window.location.hash.slice(1)
    })
  }
}

// 形参1是Vue的构造函数 : 目的是便于扩展
// install.call(VueRouter,Vue)
VueRouter.install = function(_Vue) {
  Vue = _Vue;

  // 1 将$router注册一下
  // 下面的代码会延迟未来某个时刻：根实例创建时
  Vue.mixin({
      beforeCreate(){
         // 只需要根实例执行一次
         if(this.$options.router){
            // 希望将来任何组件都可以通过$router访问路由器的实例
            Vue.prototype.$router=this.$options.router
         }
       
      }
  })
 

  // 注册两个全局的组件：router-link router-view
  Vue.component("router-link", {
    // template:'<a>router-link</a>'
    props: {
      to: {
        type: String,
        required: true,
      },
    },

    render(h) {
      // h就是createElement()
      // 作用 返回一个虚拟dom
      // <router-link to="/about">abc</router-link>
      // return <a href={'#'+this.to}>{this.$slots.default}</a>
      // 获取插槽内容 this.$slots.default
      return h(
        "a",
        {
          attrs: {
            href: "#" + this.to,
          },
        },
        this.$slots.default
      );
    },
  });
  Vue.component("router-view", {
    // vue.runtime.js
    // vue.js compiler->template->render()
    // template:'<div>router-view</div>'
    render(h) {
      // 可以传入一个组件直接渲染
      // 思路： 如果可以根据url的hash部分动态的匹配这个要渲染的组件
      // window.location.hash
      // this.$router
      let component=null;
      const route=this.$router.$options.routes.find(route=>route.path===this.$router.current)
      if(route){
          component=route.component;
      }
      return h(component);
    },
  });
};

export default VueRouter;
