(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{175:function(t,e,a){"use strict";e.a=[{excerpt:"  深入理解 JavaScript 代码编译过程   本文将从 `AST` 开始，结合 `Babel` 由浅入深的去探究编译器是如何编译 `JS` 代码的。   AST  在计算机科学中，抽象语法树（`abstract syntax tree` 或者缩写为 `AST`），或者语法树（`syntax tree`），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。树上的每个节点都...",tags:["AST抽象语法树"],id:0,title:"AST抽象语法树",lastUpdated:"2019-11-28 10:19:26",path:"/posts/Chapter3/ast.html",className:"bg-color2",categories:"计算机基础"},{excerpt:"  1. this 的原理以及几种不同使用场景的取值。  **this** 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于`函数调用时`的各种条件。  **this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。**  当一个函数被调用时，会创建一个活动记录(有时候也称为执行上下文)。这个记录会包含函数在哪里被调用(调用栈)、函数的调用方法、传入的参数等信息。`thi...",tags:["this"],id:1,title:"this",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter1/this.html",className:"bg-color2",categories:"JS基础"},{excerpt:"  CSS 渲染原理以及优化策略  转载自：[CSS 渲染原理以及优化策略](http://jartto.wang/2019/10/23/css-theory-and-optimization/)  作者：[Jartto's blog](http://jartto.wang/)  提起 CSS 很多童鞋都很不屑，尤其是看到 RedMonk 2019 Programming Language Ra...",tags:["CSS渲染原理"],id:2,title:"CSS渲染原理",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter2/css%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.html",className:"bg-color2",categories:"HTML&CSS"},{excerpt:"  1. 熟练应用 `map`、`reduce`、`filter` 等高阶函数解决问题。  列举一些 `map`、`reduce`、`filter` 高频使用场景。   [map 方法介绍：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) `map()...",tags:["高阶函数"],id:3,title:"高阶函数",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter1/%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0.html",className:"bg-color1",categories:"JS基础"},{excerpt:"  至少说出三种判断 JavaScript 数据类型的方式，以及他们的优缺点，如何准确的判断数组类型？   typeof `typeof`是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 7 种：`number`、`boolean`、`symbol`、`string`、`object`、`undefined`、`fu...",tags:["判断数据类型"],id:4,title:"判断数据类型",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter1/%E5%88%A4%E6%96%AD%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html",className:"bg-color2",categories:"JS基础"},{excerpt:"  1. 理解 JavaScript 的执行上下文。   什么是执行上下文？ 当函数执行时，会创建一个称为执行上下文的变量对象`可理解为作用域`。一个执行上下文定义了一个函数执行时的环境。  `执行上下文`也分为两种类型：  - **全局执行上下文：** 代码首次执行时候的默认环境，在代码的整个执行过程中，只用一个全局执行上下文。  - **函数执行上下文：** 每当执行流程进入到一个...",tags:["执行上下文"],id:5,title:"执行上下文",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter1/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87.html",className:"bg-color1",categories:"JS基础"},{excerpt:"  彻底理解浏览器缓存机制   概述  浏览器的缓存机制也就是我们说的 `HTTP` 缓存机制，其机制是根据 `HTTP` 报文的缓存标示进行的。  所以在分析浏览器缓存之前，我们先使用图文简单介绍一下 `HTTP` 报文，`HTTP` 报文分为两种：  - `HTTP` 请求（`Request`）报文。报文格式为：     1. **请求行**。     2. **`HTTP` 头**（通...",tags:["浏览器缓存"],id:6,title:"浏览器缓存",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter5/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6.html",className:"bg-color3",categories:"运行环境"},{excerpt:"  1. 理解代码到底是什么，计算机如何将代码转换为可以运行的目标程序？  2. 正则表达式的匹配原理和性能优化。  3. 如何将JavaScript代码解析成抽象语法树(AST)。 [参考：](https://juejin.im/post/5d84ae08e51d4561a705bbde)  4. base64 的编码原理。  5. 几种进制的相互转换计算方法，在JavaSc...",tags:["编译原理"],id:7,title:"编译原理",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter3/",className:"bg-color3",categories:"计算机基础"},{excerpt:"  1. 闭包的实现原理和作用，可以列举几个开发中闭包的实际应用。   闭包的概念：闭包是可以记住并有权访问所在函数作用域的`函数`，即使这个`函数`是在当前函数作用域之外执行。  ```js function add() {     var a = 1;     return function closure(b) {          return a + b;      } }...",tags:["闭包"],id:8,title:"闭包",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter1/%E9%97%AD%E5%8C%85.html",className:"bg-color3",categories:"JS基础"},{excerpt:"  网站优化实践  转载自: [Jartto's blog](http://jartto.wang/2019/02/16/web-optimization/)  网站优化是前端开发的重中之重，但是优化细节却十分繁杂，没有好的思路，优化很难高效的开展。  本文将以实际网站来做参考，手把手教你如何一步步做好网站优化。  这不是一篇 **基础网站优化** 文章，继续下文前，请确定已经做了如下基本优化：...",tags:["性能优化"],id:9,title:"性能优化",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter1/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html",className:"bg-color1",categories:"JS基础"},{excerpt:"  1. 回流与重绘的底层原理，引发原因，如何有效避免。 ![浏览器的渲染过程](https://qiniu.mdnice.com/01ad76b52063b38398ffde4cade3edb9.png)   浏览器的渲染过程： 1. 解析 `HTML` 树生成 `DOM` 树，解析 `CSS` 生成 `CSSOM` 树。 2. 将 `DOM` 树和 `CSSOM` 树结合生成渲染树 ...",tags:["回流与重绘"],id:10,title:"回流与重绘",lastUpdated:"2019-11-21 16:13:47",path:"/posts/Chapter2/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%E5%8E%9F%E7%90%86.html",className:"bg-color2",categories:"HTML&CSS"},{excerpt:"  1. 从规范的角度理解 HTML，从分类和语义的角度使用标签。   2. 常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式。   3. 元信息类标签（head、title、meta）的使用目的和配置方法。   4. HTML5 离线缓存原理。  使用 `HTML5` 通过创建 `cache manifest` 文件，可以轻松地创建 web 应用的离线...",tags:["HTML汇总"],id:11,title:"HTML汇总",lastUpdated:"2019-11-05 17:03:47",path:"/posts/Chapter2/html.html",className:"bg-color1",categories:"HTML&CSS"},{excerpt:'  CSS 所有选择器及其优先级、使用场景，哪些可以继承，如何运用 @ 规则。   CSS 选择器优先级及使用场景  1. 在属性后面使用 `!important`， 权重最高。  2. 内联样式，如 `style=""`，权重 `1000`。  3. `id` 选择器，如 `header`，权重 `100`。  4. 类、伪类、属性选择器，如 `.header div:last-ch...',tags:["CSS选择器"],id:12,title:"CSS选择器",lastUpdated:"2019-11-04 09:02:04",path:"/posts/Chapter2/css%E9%80%89%E6%8B%A9%E5%99%A8.html",className:"bg-color3",categories:"HTML&CSS"},{excerpt:"  CSS 伪类和伪元素有哪些，它们的区别和实际应用。   CSS 伪类  CSS 伪元素是用来对一些选择器添加特殊效果。  - **:link**：     用于设置未被访问的链接的样式。  - **:visited**：  用于设置已经被访问的链接的样式。  - **:hover**：    用于设置将鼠标悬浮在链接上的样式。  - **:active**：   用于设置鼠标点击链接...",tags:["CSS伪类"],id:13,title:"CSS伪类和伪元素",lastUpdated:"2019-11-04 09:02:04",path:"/posts/Chapter2/css%E4%BC%AA%E7%B1%BB.html",className:"bg-color3",categories:"HTML&CSS"},{excerpt:"  BFC 实现原理，可以解决的问题，如何创建 BFC。  **BFC** 即 `Block Formatting Contexts`（块级格式上下文），它的布局模式为`流动模型`，是一个独立的渲染区域。 `BFC` 决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。  **具有 `BFC` 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素。** ...",tags:["BFC"],id:14,title:"BFC 实现原理",lastUpdated:"2019-11-04 09:02:04",path:"/posts/Chapter2/bfc.html",className:"bg-color3",categories:"HTML&CSS"},{excerpt:'  元素水平垂直居中的方案、可以实现 6 种以上并对比它们的优缺点。  <img alt="元素居中" width="30%" src="http://qiniu.mdnice.com/164c36b8b16a017a344a634667b05eb8.png">   1. 绝对定位 transform 变形 （不定宽高）  *IE8 不支持*  采用 `transform: transl...',tags:["垂直居中"],id:15,title:"水平垂直居中方案",lastUpdated:"2019-11-04 09:02:04",path:"/posts/Chapter2/%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.html",className:"bg-color3",categories:"HTML&CSS"},{excerpt:"  CSS 盒模型，在不同浏览器下的差异。   标准盒模型和怪异盒模型  - **标准盒模型**：宽度只是内容（content）的宽度。      ![1265396-20171119143703656-1332857321.png](https://i.loli.net/2019/09/30/D7Wl59TfMQcdmwG.png)  - **怪异（IE）盒模型**：宽度是内容（con...",tags:["CSS盒模型"],id:16,title:"CSS盒模型",lastUpdated:"2019-11-04 09:02:04",path:"/posts/Chapter2/css%E7%9B%92%E6%A8%A1%E5%9E%8B.html",className:"bg-color3",categories:"HTML&CSS"},{excerpt:"  1. HTML 文档流的排版规则，CSS 几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理。   文档流的排版规则  元素默认从左向右、从上到下进行排列。  标准文章流分为：**块级元素**和**行内元素**。  **块级元素：**独占一行，水平方向不能与其他元素并排显示，可设置宽、高，宽度默认为父级的100%。 **行内元素：**     2....",tags:["CSS"],id:17,title:"CSS汇总",lastUpdated:"2019-11-04 09:02:04",path:"/posts/Chapter2/",className:"bg-color3",categories:"HTML&CSS"},{excerpt:'   三栏布局有几种实现方式，并说出它们的优缺点。  *三栏布局是指左栏和右栏固定宽度，中间的宽度自适应。三栏布局也被称为圣杯布局或者双飞翼布局。*   1. 浮动布局   ```html <style type="text/css">     .left, .center, .right {         height: 200px;     }     .left, .right ...',tags:["三栏布局"],id:18,title:"三栏布局",lastUpdated:"2019-11-04 09:02:04",path:"/posts/Chapter2/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80.html",className:"bg-color2",categories:"HTML&CSS"},{excerpt:'  Vue 组件间通信方法汇总   父组件向子组件传值    1. 通过属性传值 props   `props` 可以是数组或对象，用于接收来自父组件的数据。  ```js // 父组件 List.vue <template>   <div>     <List-item :str="str" :obj="obj" :arr="arr"></List-item>   </div>...',tags:["Vue组件通信"],id:19,title:"Vue组件通信",lastUpdated:"2019-11-04 09:02:04",path:"/posts/Chapter6/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",className:"bg-color2",categories:"框架"},{excerpt:"  1. 手动实现 call、apply、bind。   手动实现 call() 方法  **实现思路：调用 `call` 方法时，`this` 指向传入的第一个参数，参数不固定。**   ```js Function.prototype._call = function() {     let thisArg = arguments[0];     if(thisArg === nul...",tags:["实现轮子"],id:20,title:"实现轮子",lastUpdated:"2019-10-23 13:52:33",path:"/posts/Chapter4/",className:"bg-color3",categories:"数据结构和算法"},{excerpt:"  1. 理解常见数据结构的特点，以及他们在不同场景下使用的优缺点。   2. 理解数组、字符串的存储原理，并熟练应用他们解决问题。   3. 理解二叉树、栈、队列、哈希表的基本结构和特点，并可以应用它解决问题。   4. 了解图、堆的基本结构和使用场景。...",tags:["数据结构"],id:21,title:"数据结构",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter4/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",className:"bg-color3",categories:"数据结构和算法"},{excerpt:" 1. 理解Git的核心原理、工作流程、和 SVN 的区别。  2. 熟练使用常规的 Git 命令、git rebase、git stash 等进阶命令。  3. 可以快速解决线上分支回滚、线上分支错误合并等复杂问题。...",tags:["版本控制"],id:22,title:"版本控制",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.html",className:"bg-color3",categories:"工程化"},{excerpt:"  1. 多种方式实现数组去重、扁平化、对比优缺点。   2. 多种方式实现深拷贝、对比优缺点。   3. 手写函数柯里化工具函数、并理解其应用场景和优势。   4. 手写防抖和节流工具函数、并理解其内部原理和应用场景。   5. 实现一个 sleep 函数。  ...",tags:["编码能力"],id:23,title:"编码能力",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter4/%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B.html",className:"bg-color3",categories:"数据结构和算法"},{excerpt:"  1. 理解什么是协议，了解 TCP/IP 网络协议族的构成，每层协议在应用程序中发挥的作用。   什么是协议？  网络协议的简称，是通信计算机双方必须共同遵从的一组约定。如怎么样建立连接、怎么样互相识别等。只有遵守这个约定，计算机之间才能相互通信交流。它的三要素是：`语法`、`语义`、`时序`。  **协议往往分成几个层次进行定义，分层定义是为了使某一层协议的改变不影响其他层次的协议...",tags:["网络协议"],id:24,title:"网络协议",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter3/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE.html",className:"bg-color3",categories:"计算机基础"},{excerpt:"  1. React 和 Vue 选型以及两者优缺点、核心架构的区别。   2. React中 setState 的执行机制，如何有效的管理状态。   3. React 的事件底层实现机制。   4. React 的虚拟 DOM 和 Diff 算法的内部实现。   5. React的 Fiber 工作原理，解决了什么问题。   6. React Router 和 Vue R...",tags:["React"],id:25,title:"React",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/react.html",className:"bg-color2",categories:"框架"},{excerpt:"  1. 可计算一个算法的时间复杂度和空间复杂度，可估计业务逻辑代码的耗时和内存消耗。   2. 至少理解五种排序算法的实现原理、应用场景、优缺点，可快速说出时间、空间复杂度。   3. 了解递归和循环的优缺点、应用场景、并可在开发中熟练应用。   4. 可应用回溯算法、贪心算法、分治算法、动态规划等解决复杂问题。   5. 前端处理海量数据的算法方案。 ...",tags:["算法"],id:26,title:"算法",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter4/%E7%AE%97%E6%B3%95.html",className:"bg-color3",categories:"数据结构和算法"},{excerpt:" 1. 理解 npm、yarn 依赖包管理的原理，两者的区别。  2. 可以使用 npm 运行自定义脚本。  3. 理解 Babel、ESLint、webpack 等工具在项目中承担的作用。  4. ESLint 规则检测原理，常用的 ESLint 配置。  5. Babel 的核心原理，可以自己编写一个 Babel 插件。  6. 可以配置一种前端代码兼容方案，如 Polyfill。  7. W...",tags:["项目构建"],id:27,title:"项目构建",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/%E9%A1%B9%E7%9B%AE%E6%9E%84%E5%BB%BA.html",className:"bg-color3",categories:"工程化"},{excerpt:" 1. 熟练掌握一种接口管理、接口 mock 工具的使用，如 yapi。  2. 掌握一种高效的日志埋点方案，可快速使用日志查询工具定位线上问题。  3. 理解 TDD 与 BDD 模式，至少会使用一种前端单元测试框架。...",tags:["开发提速"],id:28,title:"开发提速",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/%E5%BC%80%E5%8F%91%E6%8F%90%E9%80%9F.html",className:"bg-color3",categories:"工程化"},{excerpt:"  1. 正向代理与反向代理的特点和实例。   2. 可手动搭建一个简单的 nginx 服务器。   3. 熟练应用常用的 nginx 内置变量，掌握常用的匹配规则写法。   4. 可以用 nginx 实现请求过滤、配置 gzip、负载均衡等，并能解释其内部原理。...",tags:["Nginx"],id:29,title:"Nginx",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/nginx.html",className:"bg-color3",categories:"工程化"},{excerpt:" 1. 掌握 React 和 Vue 传统的跨组件通信方案，对比采用数据流管理框架的异同。  2. 熟练使用 Redux 管理数据流，并理解其实现原理，中间件实现原理。  3. 熟练使用 Mobx 管理数据流，并理解其实现原理，相比 Redux 有什么优势。   4. 熟练使用 Vuex 管理数据流，并理解其实现原理。  5. 以上数据流方案的异同和优缺点，不情况下的技术选型。 ...",tags:["数据流管理"],id:30,title:"数据流管理",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/%E6%95%B0%E6%8D%AE%E6%B5%81%E7%AE%A1%E7%90%86.html",className:"bg-color3",categories:"框架"},{excerpt:" 1. 理解 CI/CD 技术的意义，至少熟练掌握一种 CI/CD 工具的使用，如 Jenkins。  2. 可以独自完成架构设计、技术选型、环境搭建、全流程开发、部署上线等一套完整的开发流程（包括Web应用、移动客户端应用、PC客户端应用、小程序、H5等等）。 ...",tags:["持续集成"],id:31,title:"持续集成",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter7/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.html",className:"bg-color3",categories:"工程化"},{excerpt:"  3. Vue双向绑定实现原理、Diff 算法的内部实现。   4. Vue 的事件机制。   5. 从 template 转换成真实DOM的实现机制。...",tags:["Vue"],id:32,title:"Vue",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/vue.html",className:"bg-color1",categories:"框架"},{excerpt:"  1. 理解泛型、接口等面向对象的相关概念，TypeScript 对面向对象理念的实现。   2. 理解使用 TypeScript 的好处，掌握 TypeScript 基础语法。   3. TypeScript 的规则检测原理。   4. 可以在 React、Vue 等框架中使用 TypeScript 进行开发。...",tags:["TypeScript"],id:33,title:"TypeScript",lastUpdated:"2019-10-21 11:26:01",path:"/posts/Chapter6/TypeScript.html",className:"bg-color3",categories:"框架"},{excerpt:"  如何优雅的处理前端异常？  转自：[如何优雅处理前端异常？](http://jartto.wang/2018/11/20/js-exception-handling/index.html)  作者：[Jartto](http://jartto.wang/)   为什么要处理异常？ > 异常是不可控的，会影响最终的呈现结果，但是我们有充分的理由去做这样的事情。  1. 增强用户体验。 2....",tags:["异常处理"],id:34,title:"异常处理",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/%E5%89%8D%E7%AB%AF%E5%BC%82%E5%B8%B8.html",className:"bg-color3",categories:"JS基础"},{excerpt:"  1. JavaScript 规定了几种语言类型？  JavaScript 规定了两种数据类型： - **原始类型：** `string`、`number`、`boolean` 、`null`、`undefined`、`symbol`  - **引用类型：** `Object`、`Function`、`Array`   2. JavaScript 对象的底层数据结构是什么？    3...",tags:["基础问题"],id:35,title:"基础问题",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/",className:"bg-color3",categories:"JS基础"},{excerpt:"  Symbol 类型在实际开发中的应用？  `symbol` 是 ES6 新增，是一种基本数据类型，该类型具有静态属性和静态方法。  `Symbol()` 函数会返回 `symbol` 类型的值，但它不支持语法 `new Symbol()`。  > 每个从 Symbol()返回的 symbol 值都是唯一的。一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的。   sy...",tags:["Symbol"],id:36,title:"Symbol",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/symbol.html",className:"bg-color3",categories:"JS基础"},{excerpt:"  可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用？   类型转换表  |值\t|转换为字符串\t|转换为数字\t|转换为布尔值\t|转换为对象| |---|------------|----------|----------|---------| |undefined\t|“undefined”|\tNaN\t|false|\tthrow TypeError| |null\t|“null”|\t...",tags:["类型转换"],id:37,title:"类型转换",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html",className:"bg-color3",categories:"JS基础"},{excerpt:"  1. 理解词法作用域和动态作用域。   什么是词法作用域？  **词法作用域：** 是定义在词法阶段的作用域，换句话说，词法作用域是由你在写代码时将变量和函数作用域写在哪里来决定的。  因此当词法分析器处理代码时会保持作用域不变。词法作用域即**静态作用域**。  **动态作用域：** 需要明确的是，JavaScript 并不具有动态作用域，它只有词法作用域，简单明了。  **`th...",tags:["作用域"],id:38,title:"作用域",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/%E4%BD%9C%E7%94%A8%E5%9F%9F.html",className:"bg-color2",categories:"JS基础"},{excerpt:"  1. 为何 try 里面放 return，finally 还会执行，理解其内部机制。  如果存在 `finally` 代码块，`try` 中的 `return` 语句不会立马返回给调用者， 而是记录下返回值等待 `finally` 代码块执行完毕之后再返回。  **注意的几点：**  - 不管 `try` 里有没有返回值，`finally` 都会执行。  - 不管有没有异常，`finall...",tags:["执行机制"],id:39,title:"执行机制",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6.html",className:"bg-color3",categories:"JS基础"},{excerpt:"  1. JavaScript 提供的正则表达式 API、可以使用正则表达式（邮箱校验、URL解析、去重等）解决常见问题。   修饰符 修饰符写在结尾的 `/` 之后，影响整个正则表达式的匹配行为。  - **`i` 不区分大小写（ignore）：**      在匹配时忽略英文字母的大小写。  - **`g` 全局匹配（global）：**      正则表达式默认只会返回第一个匹配结...",tags:["正则表达式"],id:40,title:"正则表达式",lastUpdated:"2019-10-10 04:10:03",path:"/posts/Chapter1/%E6%AD%A3%E5%88%99.html",className:"bg-color3",categories:"JS基础"},{excerpt:"  1. 理解原型设计模式以及 JavaScript 中的原型规则。  我们创建的每个函数都有一个 `protoype` 属性，这个 `prototype` 属性是一个指针，指向**原型对象**。  **这个对象的用途**：包含由特定类型的所有实例共享的属性和方法（通俗的说就是，所有特定类型的实例都可以共享这个对象上的属性和方法）。   原型对象的两种赋值方法：   1. 给原...",tags:["原型和原型链"],id:41,title:"原型和原型链",lastUpdated:"2019-10-08 04:10:03",path:"/posts/Chapter1/%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE.html",className:"bg-color1",categories:"JS基础"}]},176:function(t,e,a){},217:function(t,e,a){"use strict";var s=a(176);a.n(s).a},305:function(t,e,a){"use strict";a.r(e);var s=a(175),l={data:function(){return{content:s.a,headerClass:""}},methods:{toTaglist:function(){},handleScroll:function(t){var e=window.pageYOffset;this.headerClass=0===e?"heder-scrolled":""}},mounted:function(){console.log(this.posts),window.addEventListener("scroll",this.handleScroll)},computed:{posts:function(){return this.content.slice(0,3)}}},r=(a(217),a(17)),i=Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"home-container"},[a("el-header",{staticClass:"home-header",class:t.headerClass},[a("el-row",[a("el-col",{attrs:{span:3}},[a("svg",{staticClass:"icon",attrs:{t:"1571622043192",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2542",width:"60",height:"60"}},[a("path",{attrs:{d:"M512 170.666667H398.222222v682.666666h56.888889V512h56.888889c91.022222 0 170.666667-73.955556 170.666667-170.666667s-73.955556-170.666667-170.666667-170.666666z m113.777778 170.666666c0 62.577778-51.2 113.777778-113.777778 113.777778H455.111111V227.555556h56.888889c62.577778 0 113.777778 51.2 113.777778 113.777777zM910.222222 227.555556V170.666667h-170.666666v56.888889h56.888888v568.888888h-56.888888v56.888889h170.666666v-56.888889h-56.888889V227.555556zM199.111111 170.666667C119.466667 170.666667 56.888889 233.244444 56.888889 312.888889V853.333333h56.888889V512h170.666666v341.333333h56.888889V312.888889C341.333333 233.244444 278.755556 170.666667 199.111111 170.666667zM284.444444 455.111111H113.777778V312.888889C113.777778 267.377778 153.6 227.555556 199.111111 227.555556h5.688889C244.622222 227.555556 284.444444 267.377778 284.444444 312.888889V455.111111z",fill:"#ffd04b","p-id":"2543"}})])]),t._v(" "),a("el-col",{attrs:{span:12,offset:9,xs:{span:14}}},[a("el-menu",{staticClass:"el-header-menu",attrs:{mode:"horizontal","background-color":"transparent","text-color":"#fdf5ab","active-text-color":"#ffd04b","default-active":"/",router:!0}},t._l(t.$themeConfig.navMenus,(function(e){return a("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.name))])})),1)],1)],1)],1),t._v(" "),a("div",{staticClass:"home-main"},[a("div",{staticClass:"home-main-banner animated fadeInDown",style:{backgroundImage:"url("+t.$themeConfig.bgImg+")"}},[a("div",{staticClass:"banner-desc"},[t._v(t._s(t.$themeConfig.homeDescription))])]),t._v(" "),a("div",{staticClass:"main-part"},[a("div",{staticClass:"main-part-title"},[a("p",[t._v(t._s(t.$themeConfig.partTitle[2].name))]),t._v(" "),a("span",[t._v(t._s(t.$themeConfig.partTitle[2].des))])]),t._v(" "),a("Content")],1),t._v(" "),a("div",{staticClass:"main-part"},[a("div",{staticClass:"main-part-title"},[a("p",[t._v(t._s(t.$themeConfig.partTitle[0].name))]),t._v(" "),a("span",[t._v(t._s(t.$themeConfig.partTitle[0].des))])]),t._v(" "),a("el-row",{attrs:{gutter:48}},t._l(t.posts,(function(e){return a("el-col",{key:e.id,attrs:{span:8,xs:24}},[a("article",{staticClass:"main-part-art"},[a("div",{staticClass:"part-art-img",class:e.className},[a("svg",{staticClass:"icon",attrs:{t:"1571111242254",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2523",width:"100",height:"100"}},[a("path",{attrs:{d:"M202.15625 929.09375c-17.0625 0-33.09375-6.65625-45.1875-18.65625-12.09375-12.09375-18.75-28.125-18.75-45.28125V158.65625c0-35.25 28.6875-63.9375 63.9375-63.9375h663.1875c10.125 0 18.375 8.25 18.375 18.375s-8.25 18.375-18.375 18.375H202.0625c-15 0-27.1875 12.1875-27.1875 27.1875v706.5c0 7.3125 2.8125 14.0625 7.96875 19.21875s12 7.96875 19.21875 7.96875h0.09375l609.09375-2.0625c15-0.09375 27.1875-12.28125 27.1875-27.1875V334.25c0-15-12.1875-27.1875-27.1875-27.1875h-556.875c-10.125 0-18.375-8.25-18.375-18.375s8.25-18.375 18.375-18.375h556.875c35.25 0 63.9375 28.6875 63.9375 63.9375v528.84375c0 35.15625-28.59375 63.84374999999999-63.75 63.9375l-609.09375 2.0625h-0.1875z","p-id":"2524",fill:"#ffffff"}}),a("path",{attrs:{d:"M636.875 462.875H252.03125c-10.125 0-18.375-8.25-18.375-18.375s8.25-18.375 18.375-18.375h384.84375c10.125 0 18.375 8.25 18.375 18.375s-8.15625 18.375-18.375 18.375c0.09375 0 0.09375 0 0 0z","p-id":"2525",fill:"#ffffff"}})])]),t._v(" "),a("div",{staticClass:"part-art-text"},[a("h3",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.excerpt))])]),t._v(" "),a("div",{staticClass:"part-art-tags"},t._l(e.tags,(function(s,l){return a("el-tag",{key:l,attrs:{size:"small",hit:!0},on:{click:t.toTaglist}},[a("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1)})),1),t._v(" "),a("p",{staticClass:"update"},[t._v("更新时间："+t._s(e.lastUpdated))]),t._v(" "),a("i",{staticClass:"light"})])])})),1)],1),t._v(" "),a("div",{staticClass:"main-part"},[a("div",{staticClass:"main-part-title"},[a("p",[t._v(t._s(t.$themeConfig.partTitle[1].name))]),t._v(" "),a("span",[t._v(t._s(t.$themeConfig.partTitle[1].des))])]),t._v(" "),a("el-row",{attrs:{gutter:30}},t._l(t.$themeConfig.part3,(function(e,s){return a("el-col",{key:e.index,attrs:{span:6,xs:24}},[a("article",{staticClass:"main-part-art part-art2"},[a("div",{staticClass:"part-art-img"},[a("img",{attrs:{src:e.img}})]),t._v(" "),a("div",{staticClass:"part-art-text"},[a("h4",[a("a",{attrs:{href:e.src,target:"_black"}},[t._v(t._s(e.name))])]),t._v(" "),a("p",{staticClass:"author"},[t._v(t._s(e.author))]),t._v(" "),a("div",[t._v(t._s(e.des))])])])])})),1)],1)])],1),t._v(" "),a("el-footer",{staticClass:"home-footer"},[a("el-row",{staticClass:"footer-main",attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"footer-article",attrs:{span:6,xs:{span:24}}},[a("h4",[t._v("友情链接")]),t._v(" "),a("p",t._l(t.$themeConfig.friendLink,(function(e){return a("a",{key:e.index,staticClass:"link-item",attrs:{href:e.src,target:"_blank"}},[t._v(t._s(e.name))])})),0)]),t._v(" "),a("el-col",{staticClass:"footer-article",attrs:{span:6,xs:{span:24}}},[a("h4",[t._v("许可")]),t._v(" "),a("p",[a("span",[t._v("\n            博客内容遵循\n            "),a("a",{attrs:{rel:"license",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"}},[t._v("知识共享 署名 - 非商业性 - 相同方式共享 4.0 国际协议")])])])]),t._v(" "),a("el-col",{staticClass:"footer-article",attrs:{span:8,xs:{span:24}}},[a("el-row",[a("el-col",{attrs:{span:8,offset:6}},[a("img",{attrs:{src:t.$themeConfig.linkImg[0].src}}),t._v(" "),a("span",[t._v(t._s(t.$themeConfig.linkImg[0].name))])]),t._v(" "),a("el-col",{attrs:{span:8,offset:1}},[a("img",{attrs:{src:t.$themeConfig.linkImg[1].src}}),t._v(" "),a("span",[t._v(t._s(t.$themeConfig.linkImg[1].name))])])],1)],1)],1),t._v(" "),a("el-row",{staticClass:"footer-bottom"},[a("div",{staticClass:"footer-copyright"},[t._v("© 2019 xingleiZhao - 面试API. by "),a("a",{attrs:{href:"https://github.com/zhhlwd/vuepress-theme-indigo-material",target:"_blank"}},[t._v("vuepress indigo material")])])])],1)],1)}),[],!1,null,"702eecdd",null);e.default=i.exports}}]);