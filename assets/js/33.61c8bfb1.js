(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{352:function(s,t,n){"use strict";n.r(t);var a=n(17),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-理解-javascript-的执行上下文。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-理解-javascript-的执行上下文。","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 理解 JavaScript 的执行上下文。")]),s._v(" "),n("h4",{attrs:{id:"什么是执行上下文？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是执行上下文？","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是执行上下文？")]),s._v(" "),n("p",[s._v("当函数执行时，会创建一个称为执行上下文的变量对象"),n("code",[s._v("可理解为作用域")]),s._v("。一个执行上下文定义了一个函数执行时的环境。")]),s._v(" "),n("p",[n("code",[s._v("执行上下文")]),s._v("也分为两种类型：")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("全局执行上下文：")]),s._v(" 代码首次执行时候的默认环境，在代码的整个执行过程中，只用一个全局执行上下文。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("函数执行上下文：")]),s._v(" 每当执行流程进入到一个函数体内部的时候，就会创建一个函数执行上下文，"),n("code",[s._v("可以有任意数量的函数执行上下文")]),s._v("。")])])]),s._v(" "),n("p",[n("strong",[s._v("执行上下文主要有两个阶段：")]),s._v(" "),n("code",[s._v("创建阶段")]),s._v("和"),n("code",[s._v("执行阶段")]),s._v("。")]),s._v(" "),n("p",[n("strong",[s._v("创建阶段：")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("首先，为每个函数或变量创建与外部环境的连接，这这个连接形成"),n("code",[s._v("作用域链")]),s._v("。"),n("code",[s._v("作用链")]),s._v("告诉执行上下文它应该包含什么，以及它应该在哪里查找解析函数的引用和变量的值。")])]),s._v(" "),n("li",[n("p",[s._v("扫描"),n("code",[s._v("作用链")]),s._v("后，将创建一个环境存储器，其中"),n("code",[s._v("全局上下文")]),s._v("、"),n("code",[s._v("变量")]),s._v("、"),n("code",[s._v("函数及函数参数")]),s._v("的创建和引用在内存中完成。")])]),s._v(" "),n("li",[n("p",[s._v("最后，在第一步中创建的每个执行上下文中确定 "),n("code",[s._v("this")]),s._v(" 关键字的值。")])])]),s._v(" "),n("p",[n("strong",[s._v("每个执行上下文包含了三个重要属性："),n("code",[s._v("变量对象（VO）")]),s._v("、"),n("code",[s._v("作用域链")]),s._v("、"),n("code",[s._v("this")]),s._v("。")])]),s._v(" "),n("p",[s._v("创建阶段伪代码：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("createContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建阶段")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'outerEnvironmentConnection'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建外部连接")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 形成作用域链")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    \n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'variableObjectMapping'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 变量、函数和函数参数的创建和引用在内存中完成。")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'valueOfThis'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 确定 this 的值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("strong",[s._v("执行阶段：")])]),s._v(" "),n("p",[n("code",[s._v("执行阶段")]),s._v("是代码在创建阶段形成的执行上下文中的运行的阶段，并且逐行分配变量值。")]),s._v(" "),n("p",[s._v("当执行开始时，JavaScript 引擎在其创建阶段形成的"),n("code",[s._v("AO对象")]),s._v("中查找执行函数的引用。如果在当前对象中没有找到，它将沿着作用域继续向上查找，直到它到达全局环境。")]),s._v(" "),n("p",[s._v("如果在全局环境中找不到函数引用，则将返回错误。")]),s._v(" "),n("p",[s._v("如果找到了引用并且函数正确执行，那么这个特定函数的执行上下文将从栈中弹出，接着 JavaScript 引擎将移动到下一个函数，它们的函数执行上下文将被加入到栈中并执行，以此类推。")]),s._v(" "),n("p",[s._v("下面结合代码来理解"),n("code",[s._v("两种执行上下文")]),s._v("的"),n("code",[s._v("两个阶段")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webinfoq"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" title "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"execution context"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" message "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("num")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" author "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deepak"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("func2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("multiply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fixed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Divine"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addFive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("因此"),n("code",[s._v("全局执行上下文")]),s._v("的"),n("code",[s._v("创建阶段")]),s._v("将如下所示：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("globalExecutionContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局执行上下文")]),s._v("\n    outerEnvironmentConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局上下文外部环境为 null")]),s._v("\n    variableObjectMapping"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" uninitialized"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在创建阶段，let 声明的变量是未初始化状态")]),s._v("\n        title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在创建阶段，var 声明的变量表示为未定义")]),s._v("\n        date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" uninitialized"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在创建阶段，const 声明的变量是未初始化状态")]),s._v("\n        func1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<func1 reference>")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// func1 地址引用")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" window "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Global Object  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("在"),n("code",[s._v("执行阶段")]),s._v("完成对变量的赋值等操作：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("globalExectutionContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局执行上下文")]),s._v("\n    outerEnvironmentConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全部上下文外部环境为 null")]),s._v("\n    variableObjectMapping"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webinfoq"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"execution context"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        func1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pointer to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" func1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指向 func1 的指针")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" window "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Global Object")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("当执行到 "),n("code",[s._v("func1")]),s._v(" 时，将形成新的"),n("code",[s._v("函数执行上下文")]),s._v("，"),n("code",[s._v("创建阶段")]),s._v("如下所示：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("func1ExecutionContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// func1 函数执行上下文")]),s._v("\n    outerEnvironmentConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 外部环境为全局环境")]),s._v("\n    variableObjectMapping"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var 声明的")]),s._v("\n        value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" uninitialized"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// let 声明的")]),s._v("\n        func2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" uninitialized"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// let 声明的")]),s._v("\n        fixed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" uninitialized"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// const 声明")]),s._v("\n        addFive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<addFive reference>")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// addFive 地址引用")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Global Object or "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("code",[s._v("执行阶段")]),s._v("如下所示：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("func1ExecutionContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    outerEnvironmentConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    variableObjectMapping"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 先处理 arguments 参数")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deepak"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//变量赋值")]),s._v("\n        val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        func2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pointer to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n        fixed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Divine"')]),s._v("\n        addFive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pointer to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addFive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Global Object or "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("strong",[s._v("最后：")])]),s._v(" "),n("p",[s._v("Javascript 引擎创建执行上下文，调用栈。当有函数执行时，引擎就会创建一个新的函数执行上下文。最后所用函数执行完成后，将更新全局环境，然后全局代码完成，程序结束。")]),s._v(" "),n("h2",{attrs:{id:"_2-理解-javascript-执行上下文栈，可以应用堆栈信息快速定位问题。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-理解-javascript-执行上下文栈，可以应用堆栈信息快速定位问题。","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 理解 JavaScript 执行上下文栈，可以应用堆栈信息快速定位问题。")]),s._v(" "),n("p",[s._v("通过阅读上一小节我们得知，每当有函数执行时，就会创建一个全新的"),n("code",[s._v("执行上下文")]),s._v("，那么怎么管理这些执行上下文呢？")]),s._v(" "),n("p",[s._v("JavaScript 引擎创建了"),n("strong",[s._v("执行上下文栈")]),s._v(" "),n("code",[s._v("Execution Context Stack")]),s._v(" 来管理执行上下文。")]),s._v(" "),n("p",[s._v("可以把执行栈认为成一个储存函数调用的栈结构，遵循先进后出的原则。")]),s._v(" "),n("p",[s._v("下图为"),n("code",[s._v("执行上下文")]),s._v("入栈出栈示意图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://i.loli.net/2019/09/23/twsk5g6oaOBFEVq.gif",alt:"入栈出栈示意图"}})]),s._v(" "),n("p",[n("strong",[s._v("JavaScript 引擎是单线程执行，所有代码都是排队执行：")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("一开始执行的是全局代码，首先创建"),n("code",[s._v("全局执行上下文")]),s._v("，然后将该执行上下文压入执行栈中。")])]),s._v(" "),n("li",[n("p",[s._v("当执行一个函数，就会创建该"),n("code",[s._v("函数执行上下文")]),s._v("，然后将其压入执行栈的顶部。")])]),s._v(" "),n("li",[n("p",[s._v("函数执行完成后，执行上下文从底部退出，等待垃圾回收。")])])]),s._v(" "),n("p",[n("strong",[s._v("调用栈的应用：")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("你可以把调用栈想象成一个函数调用链，就像我们在前面代码段的注释中所写的一样。\n另一个查看调用栈的方法是使用浏览器的调试工具。绝大多数现代桌面浏览器都内置了开发者工具， 其中包含 JavaScript 调试器。\n就本例来说，你可以在工具中给 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 函数的第一行代码设置一个断点，或者直接在第一行代码之前插入一条 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("debugger")]),s._v(" 语句。\n运行代码时，调试器会在那个位置暂停，同时会展示当前位置的函数调用列表，这就是你的调用栈。\n因此，如果你想要分析 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" 的绑定，使用开 发者工具得到调用栈，然后找到栈中第二个元素，这就是真正的调用位置。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);