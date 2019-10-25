(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{188:function(t,e,a){},233:function(t,e,a){"use strict";var s=a(188);a.n(s).a},302:function(t,e,a){"use strict";a.r(e);var s=[["2019-10",{excerpt:'  Vue 组件间通信方法汇总   父组件向子组件传值    1. 通过属性传值 props   `props` 可以是数组或对象，用于接收来自父组件的数据。  ```js // 父组件 List.vue <template>   <div>     <List-item :str="str" :obj="obj" :arr="arr"></List-item>   </div>...',tags:["Vue组件通信"],id:0,title:"Vue组件通信",lastUpdated:"2019-10-25 11:37:03",path:"/posts/Chapter6/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",className:"bg-color2",categories:"框架"},{excerpt:"  1. 手动实现 call、apply、bind。   手动实现 call() 方法  **实现思路：调用 `call` 方法时，`this` 指向传入的第一个参数，参数不固定。**   ```js Function.prototype._call = function() {     let thisArg = arguments[0];     if(thisArg === nul...",tags:["实现轮子"],id:1,title:"实现轮子",lastUpdated:"2019-10-23 13:52:33",path:"/posts/Chapter4/",className:"bg-color3",categories:"数据结构和算法"},{excerpt:"  1. CSS 盒模型，在不同浏览器下的差异。   标准盒模型和怪异盒模型：  - **标准盒模型**：宽度只是内容（content）的宽度。      ![1265396-20171119143703656-1332857321.png](https://i.loli.net/2019/09/30/D7Wl59TfMQcdmwG.png)  - **怪异（IE）盒模型**：宽度是内容...",tags:["CSS"],id:2,title:"CSS",lastUpdated:"2019-10-23 13:52:33",path:"/posts/Chapter2/",className:"bg-color3",categories:"HTML&CSS"},{excerpt:"  1. 熟练使用 Vue 的 API、生命周期、钩子函数。   2. MVVM 框架设计理念。   3. Vue双向绑定实现原理、Diff 算法的内部实现。   4. Vue 的事件机制。   5. 从 template 转换成真实DOM的实现机制。...",tags:["Vue"],id:3,title:"Vue",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/vue.html",className:"bg-color1",categories:"框架"},{excerpt:" 1. 至少掌握一种 UI 组件框架，如 antd design，理解其设计理念、底层实现。  2. 掌握一种图表绘制框架，如 Echart，理解其设计理念、底层实现，可以自己实现图表。  3. 掌握一种 GIS 开发框架，如百度地图 API。  4. 掌握一种可视化开发框架，如 Three.js、D3。  5. 工具函数库，如lodash、underscore、moment 等，理解使用的工具类...",tags:["实用库"],id:4,title:"实用库",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/%E5%AE%9E%E7%94%A8%E5%BA%93.html",className:"bg-color3",categories:"框架"},{excerpt:"  1. 理解什么是协议，了解 TCP/IP 网络协议族的构成，每层协议在应用程序中发挥的作用。   2. 三次握手和四次挥手详细原理，为什么要使用这种机制。   3. 有哪些协议是可靠，TCP 有哪些手段保证可靠交付。   4. DNS 的作用、DNS 解析的详细过程，DNS优化原理。   5. CDN 的作用和原理。   6. HTTP 请求报文和响应报文的具体组成，能...",tags:["网络协议"],id:5,title:"网络协议",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter3/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE.html",className:"bg-color3",categories:"计算机基础"},{excerpt:"  开发和调试  1. 熟练使用各浏览器提供的调试工具。  2. 熟练使用一种代理工具实现请求代理、抓包，如 charls。  3. 可以使用 Android、IOS 模拟器进行调试，并掌握一种真机调试方案。  4. 了解 Vue、React 等框架调试工具的使用。 ...",tags:["开发和测试"],id:6,title:"开发和测试",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/%E5%BC%80%E5%8F%91%E5%92%8C%E8%B0%83%E8%AF%95.html",className:"bg-color3",categories:"框架"},{excerpt:"  1. 理解代码到底是什么，计算机如何将代码转换为可以运行的目标程序？  2. 正则表达式的匹配原理和性能优化。  3. 如何将JavaScript代码解析成抽象语法树(AST)。  4. base64 的编码原理。  1. 理解代码到底是什么，计算机如何将代码转换为可以运行的目标程序？  5. 几种进制的相互转换计算方法，在JavaScript 中如何表示和转换。...",tags:["编译原理"],id:7,title:"编译原理",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter3/",className:"bg-color3",categories:"计算机基础"},{excerpt:" 1. 掌握 React 和 Vue 传统的跨组件通信方案，对比采用数据流管理框架的异同。  2. 熟练使用 Redux 管理数据流，并理解其实现原理，中间件实现原理。  3. 熟练使用 Mobx 管理数据流，并理解其实现原理，相比 Redux 有什么优势。   4. 熟练使用 Vuex 管理数据流，并理解其实现原理。  5. 以上数据流方案的异同和优缺点，不情况下的技术选型。 ...",tags:["数据流管理"],id:8,title:"数据流管理",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/%E6%95%B0%E6%8D%AE%E6%B5%81%E7%AE%A1%E7%90%86.html",className:"bg-color3",categories:"框架"},{excerpt:"  1. 可计算一个算法的时间复杂度和空间复杂度，可估计业务逻辑代码的耗时和内存消耗。   2. 至少理解五种排序算法的实现原理、应用场景、优缺点，可快速说出时间、空间复杂度。   3. 了解递归和循环的优缺点、应用场景、并可在开发中熟练应用。   4. 可应用回溯算法、贪心算法、分治算法、动态规划等解决复杂问题。   5. 前端处理海量数据的算法方案。 ...",tags:["算法"],id:9,title:"算法",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter4/%E7%AE%97%E6%B3%95.html",className:"bg-color3",categories:"数据结构和算法"},{excerpt:"  1. 正向代理与反向代理的特点和实例。   2. 可手动搭建一个简单的 nginx 服务器。   3. 熟练应用常用的 nginx 内置变量，掌握常用的匹配规则写法。   4. 可以用 nginx 实现请求过滤、配置 gzip、负载均衡等，并能解释其内部原理。...",tags:["Nginx"],id:10,title:"Nginx",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/nginx.html",className:"bg-color3",categories:"工程化"},{excerpt:"  1. 理解 Node 在应用程序中的作用，可以使用 Node 搭建前端运行环境、使用 Node 操作文件、操作数据库等等。   2. 掌握一种 Node 开发框架，如 Express，Express 和 Koa 的区别。   3. 熟练使用 Node 提供的 API 如 Path、Http、Child Process 等并理解其实现原理。   4. Node 的底层运行原理、和...",tags:["Node"],id:11,title:"Node",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter5/node.html",className:"bg-color3",categories:"运行环境"},{excerpt:" 1. 熟练掌握一种接口管理、接口 mock 工具的使用，如 yapi。  2. 掌握一种高效的日志埋点方案，可快速使用日志查询工具定位线上问题。  3. 理解 TDD 与 BDD 模式，至少会使用一种前端单元测试框架。...",tags:["开发提速"],id:12,title:"开发提速",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/%E5%BC%80%E5%8F%91%E6%8F%90%E9%80%9F.html",className:"bg-color3",categories:"工程化"},{excerpt:"  1. 各浏览器使用的 JavaScript 引擎以及它们的异同点、如何在代码中进行区分。   2. 请求数据到请求结束与服务器进行了几次交互。   3. 可详细描述浏览器从输入 URL 到页面展现的详细过程。   4. 浏览器解析HTML代码的原理，以及构建 DOM 树的流程。   5. 浏览器如何解析 CSS 规则，并将其应用到 DOM 树上。   6. 浏览器如何将...",tags:["浏览器原理"],id:13,title:"浏览器原理",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter5/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86.html",className:"bg-color3",categories:"运行环境"},{excerpt:" 1. 理解 CI/CD 技术的意义，至少熟练掌握一种 CI/CD 工具的使用，如 Jenkins。  2. 可以独自完成架构设计、技术选型、环境搭建、全流程开发、部署上线等一套完整的开发流程（包括Web应用、移动客户端应用、PC客户端应用、小程序、H5等等）。 ...",tags:["持续集成"],id:14,title:"持续集成",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.html",className:"bg-color3",categories:"工程化"},{excerpt:" ...",tags:["Angular"],id:15,title:"Angular",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/angular.html",className:"bg-color2",categories:"框架"},{excerpt:" 1. 理解Git的核心原理、工作流程、和 SVN 的区别。  2. 熟练使用常规的 Git 命令、git rebase、git stash 等进阶命令。  3. 可以快速解决线上分支回滚、线上分支错误合并等复杂问题。...",tags:["版本控制"],id:16,title:"版本控制",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.html",className:"bg-color3",categories:"工程化"},{excerpt:"  1. 从规范的角度理解 HTML，从分类和语义的角度使用标签。   2. 常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式。   3. 元信息类标签（head、title、meta）的使用目的和配置方法。   4. HTML5 离线缓存原理。   5. 可以使用 Canvas API、SVG 等绘制高性能的动画。...",tags:["HTML"],id:17,title:"HTML",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter2/html.html",className:"bg-color3",categories:"HTML&CSS"},{excerpt:" 1. 理解 npm、yarn 依赖包管理的原理，两者的区别。  2. 可以使用 npm 运行自定义脚本。  3. 理解 Babel、ESLint、webpack 等工具在项目中承担的作用。  4. ESLint 规则检测原理，常用的 ESLint 配置。  5. Babel 的核心原理，可以自己编写一个 Babel 插件。  6. 可以配置一种前端代码兼容方案，如 Polyfill。  7. W...",tags:["项目构建"],id:18,title:"项目构建",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/%E9%A1%B9%E7%9B%AE%E6%9E%84%E5%BB%BA.html",className:"bg-color3",categories:"工程化"},{excerpt:"  1. 熟练使用前端常用的设计模式编写代码，如单例模式、装饰器模式、代理模式等。   2. 发布订阅模式和观察者模式的异同以及实际应用。   3. 可以说出几种设计模式在开发中的实际应用，理解框架源码中对设计模式的应用。...",tags:["设计模式"],id:19,title:"设计模式",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter3/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html",className:"bg-color3",categories:"计算机基础"},{excerpt:' 1. 手写图片瀑布流效果。**[](1)**  2. 使用 CSS 绘制几何图形（圆形、三角形、扇形、菱形等）。**[](1)**  3. 使用纯 CSS 实现曲线运动（贝塞尔曲线）**[](3)**  4. 实现常用布局（三栏、圣杯、双飞翼、吸顶），可是说出多种方式并理解其优缺点。**[](4)**  <h2 id="1">1. 手写图片瀑布流效果。</h2>  <h2 id=...',tags:["手写"],id:20,title:"手写",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter2/%E6%89%8B%E5%86%99.html",className:"bg-color3",categories:"HTML&CSS"},{excerpt:"  1. 浏览器提供的符合W3C标准的 DOM 操作API、浏览器差异、兼容性。   2. 浏览器提供的浏览器对象模型（BOM）提供的所有全局API、浏览器差异、兼容性。   3. 大量 DOM 操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame等)。   4. 浏览器海量数据存储、操作性能优化。   5. DOM 事件流的具体实现机制、不...",tags:["浏览器API"],id:21,title:"浏览器API",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter5/%E6%B5%8F%E8%A7%88%E5%99%A8API.html",className:"bg-color3",categories:"运行环境"},{excerpt:"  1. 理解常见数据结构的特点，以及他们在不同场景下使用的优缺点。   2. 理解数组、字符串的存储原理，并熟练应用他们解决问题。   3. 理解二叉树、栈、队列、哈希表的基本结构和特点，并可以应用它解决问题。   4. 了解图、堆的基本结构和使用场景。...",tags:["数据结构"],id:22,title:"数据结构",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter4/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",className:"bg-color3",categories:"数据结构和算法"},{excerpt:"  1. 单页面应用（SPA）的原理和优缺点，掌握一种快速开发 SPA 的方案。   2. 理解 viewport、em、rem 的原理和用法，px、ppi、dpi、dp 的区别和实际应用。   3. 移动端页面适配解决方案、不同机型适配方案。   4. 掌握一种 JavaScript 移动客户端开发技术，如React Native：可以搭建React Native开发环境，熟练进...",tags:["多端开发"],id:23,title:"多端开发",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/%E5%A4%9A%E7%AB%AF%E5%BC%80%E5%8F%91.html",className:"bg-color3",categories:"框架"},{excerpt:"  1. React 和 Vue 选型以及两者优缺点、核心架构的区别。   2. React中 setState 的执行机制，如何有效的管理状态。   3. React 的事件底层实现机制。   4. React 的虚拟 DOM 和 Diff 算法的内部实现。   5. React的 Fiber 工作原理，解决了什么问题。   6. React Router 和 Vue R...",tags:["React"],id:24,title:"React",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/react.html",className:"bg-color2",categories:"框架"},{excerpt:"  1. 理解泛型、接口等面向对象的相关概念，TypeScript 对面向对象理念的实现。   2. 理解使用 TypeScript 的好处，掌握 TypeScript 基础语法。   3. TypeScript 的规则检测原理。   4. 可以在 React、Vue 等框架中使用 TypeScript 进行开发。...",tags:["TypeScript"],id:25,title:"TypeScript",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/TypeScript.html",className:"bg-color3",categories:"框架"},{excerpt:"  1. 多种方式实现数组去重、扁平化、对比优缺点。   2. 多种方式实现深拷贝、对比优缺点。   3. 手写函数柯里化工具函数、并理解其应用场景和优势。   4. 手写防抖和节流工具函数、并理解其内部原理和应用场景。   5. 实现一个 sleep 函数。  ...",tags:["编码能力"],id:26,title:"编码能力",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter4/%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B.html",className:"bg-color3",categories:"数据结构和算法"},{excerpt:"  1. JavaScript 规定了几种语言类型？  JavaScript 规定了两种数据类型： - **原始类型：** `string`、`number`、`boolean` 、`null`、`undefined`、`symbol`  - **引用类型：** `Object`、`Function`、`Array`    2. JavaScript 对象的底层数据结构是什么？   3...",tags:["变量和类型"],id:27,title:"变量和类型",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/",className:"bg-color3",categories:"JS基础"},{excerpt:"  1. 为何 try 里面放 return，finally 还会执行，理解其内部机制。  如果存在 `finally` 代码块，`try` 中的 `return` 语句不会立马返回给调用者， 而是记录下返回值等待 `finally` 代码块执行完毕之后再返回。  **注意的几点：**  - 不管 `try` 里有没有返回值，`finally` 都会执行。  - 不管有没有异常，`finall...",tags:["执行机制"],id:28,title:"执行机制",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6.html",className:"bg-color3",categories:"JS基础"},{excerpt:"  1. 理解词法作用域和动态作用域。   什么是词法作用域？  **词法作用域：** 是定义在词法阶段的作用域，换句话说，词法作用域是由你在写代码时将变量和函数作用域写在哪里来决定的。  因此当词法分析器处理代码时会保持作用域不变。词法作用域即**静态作用域**。  **动态作用域：** 需要明确的是，JavaScript 并不具有动态作用域，它只有词法作用域，简单明了。  **`th...",tags:["作用域和闭包"],id:29,title:"作用域和闭包",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85.html",className:"bg-color2",categories:"JS基础"},{excerpt:"  1. 理解 `ECMAScript` 和 `JavaScript` 的关系。  ECMAScript 和 JavaScript 的关系是：前者是后者的规格，后者是前者的一种实现，在日常场合，这两个词是可以互换的。  ```js ECMAScript 是国际标准化组织 ECMA 为 JavaScript 制定的一种标准，之所以不叫 JavaScript： 一是因为商标问题，JavaScrip...",tags:["语法和API"],id:30,title:"语法和API",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/%E8%AF%AD%E6%B3%95%E5%92%8CAPI.html",className:"bg-color3",categories:"JS基础"},{excerpt:"  1. 理解原型设计模式以及 JavaScript 中的原型规则。  我们创建的每个函数都有一个 `protoype` 属性，这个 `prototype` 属性是一个指针，指向**原型对象**。  **这个对象的用途**：包含由特定类型的所有实例共享的属性和方法（通俗的说就是，所有特定类型的实例都可以共享这个对象上的属性和方法）。   原型对象的两种赋值方法：   1. 给原...",tags:["原型和原型链"],id:31,title:"原型和原型链",lastUpdated:"2019-10-08 04:10:03",path:"/posts/Chapter1/%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE.html",className:"bg-color1",categories:"JS基础"}]],p={name:"All",data:function(){return{poList:s}},props:{content:{type:Array,default:function(){return[]}}},methods:{toTaglist:function(t){this.$router.push(t)}}},r=(a(233),a(17)),l=Object(r.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-warp"},t._l(t.poList,(function(e,s){return a("div",{key:s},[a("h3",[t._v(t._s(e[0]))]),t._v(" "),a("el-row",{staticClass:"post-warp",attrs:{type:"flex",justify:"center",align:"middle"}},[t._l(e,(function(e,s){return[0!==s?a("el-col",{key:s,staticClass:"post post-card",attrs:{span:20,xs:{span:23},sm:{span:23},md:{span:23},lg:{span:20}}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"post-header",attrs:{slot:"header"},slot:"header"},[a("p",{staticClass:"post-title-time"},[t._v(t._s(e.lastUpdated))]),t._v(" "),a("router-link",{staticClass:"post-title-link",attrs:{to:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),e.excerpt||e.tags.length?a("div",[e.excerpt?a("div",[a("div",{staticClass:"post-excerpt",domProps:{innerHTML:t._s(e.excerpt)}})]):t._e(),t._v(" "),e.tags.length?a("div",{staticClass:"post-footer"},t._l(e.tags,(function(s,p){return a("el-tag",{key:p,attrs:{size:"medium",hit:!0},on:{click:function(a){return t.toTaglist(e.path)}}},[t._v(t._s(s))])})),1):t._e()]):t._e()])],1):t._e()]}))],2)],1)})),0)}),[],!1,null,"ca44a444",null);e.default=l.exports}}]);