(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{348:function(a,t,s){"use strict";s.r(t);var e=s(17),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-从规范的角度理解-html，从分类和语义的角度使用标签。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-从规范的角度理解-html，从分类和语义的角度使用标签。","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 从规范的角度理解 HTML，从分类和语义的角度使用标签。")]),a._v(" "),s("h2",{attrs:{id:"_2-常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式。","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式。")]),a._v(" "),s("h2",{attrs:{id:"_3-元信息类标签（head、title、meta）的使用目的和配置方法。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-元信息类标签（head、title、meta）的使用目的和配置方法。","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 元信息类标签（head、title、meta）的使用目的和配置方法。")]),a._v(" "),s("h2",{attrs:{id:"_4-html5-离线缓存原理。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-html5-离线缓存原理。","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. HTML5 离线缓存原理。")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("HTML5")]),a._v(" 通过创建 "),s("code",[a._v("cache manifest")]),a._v(" 文件，可以轻松地创建 web 应用的离线版本。")]),a._v(" "),s("h3",{attrs:{id:"什么是应用程序缓存（application-cache）？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是应用程序缓存（application-cache）？","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是应用程序缓存（Application Cache）？")]),a._v(" "),s("p",[s("code",[a._v("HTML5")]),a._v(" 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。")]),a._v(" "),s("p",[s("strong",[a._v("应用程序缓存为应用带来三个优势：")])]),a._v(" "),s("ul",[s("li",[a._v("离线浏览 - 用户可在应用离线时使用它们。")]),a._v(" "),s("li",[a._v("速度 - 已缓存资源加载得更快。")]),a._v(" "),s("li",[a._v("减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。")])]),a._v(" "),s("h3",{attrs:{id:"cache-manifest-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-manifest-基础","aria-hidden":"true"}},[a._v("#")]),a._v(" Cache Manifest 基础")]),a._v(" "),s("p",[a._v("如需启用应用程序缓存，请在文档的 "),s("code",[a._v("<html>")]),a._v(" 标签中包含 "),s("code",[a._v("manifest")]),a._v(" 属性：")]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[a._v("<!DOCTYPE HTML>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("html")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("manifest")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("demo.appcache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("每个指定了 "),s("code",[a._v("manifest")]),a._v(" 的页面在用户对其访问时都会被缓存。如果未指定 "),s("code",[a._v("manifest")]),a._v(" 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。")]),a._v(" "),s("p",[s("strong",[a._v("manifest 文件的建议的文件扩展名是："),s("code",[a._v(".appcache")]),a._v("。")])]),a._v(" "),s("p",[s("em",[s("strong",[a._v("请注意，"),s("code",[a._v("manifest")]),a._v(" 文件需要配置正确的 "),s("code",[a._v("MIME-type")]),a._v("，即 "),s("code",[a._v('"text/cache-manifest"')]),a._v("。必须在 web 服务器上进行配置。")])])]),a._v(" "),s("h3",{attrs:{id:"manifest-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manifest-文件","aria-hidden":"true"}},[a._v("#")]),a._v(" Manifest 文件")]),a._v(" "),s("p",[s("code",[a._v("manifest")]),a._v(" 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）它分为三个部分：")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("CACHE MANIFEST")]),a._v(" - 在此标题下列出的文件将在首次下载后进行缓存。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("NETWORK")]),a._v(" - 在此标题下列出的文件需要与服务器的连接，且不会被缓存。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("FALLBACK")]),a._v(" - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）。")])])]),a._v(" "),s("h4",{attrs:{id:"cache-manifest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-manifest","aria-hidden":"true"}},[a._v("#")]),a._v(" CACHE MANIFEST")]),a._v(" "),s("p",[a._v("第一行 "),s("code",[a._v("CACHE MANIFEST")]),a._v("，是必需的。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CACHE MANIFEST\n/theme.css\n/logo.gif\n/main.js\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("无论用户何时与因特网断开连接，"),s("code",[a._v("CACHE MANIFEST")]),a._v(" 下列出的资源依然是可用的。")]),a._v(" "),s("h4",{attrs:{id:"network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network","aria-hidden":"true"}},[a._v("#")]),a._v(" NETWORK")]),a._v(" "),s("p",[a._v("下面的 "),s("code",[a._v("NETWORK")]),a._v(" 字段规定文件 "),s("code",[a._v("login.php")]),a._v(" 永远不会被缓存，且离线时是不可用的。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NETWORK:\nlogin.php\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("可以使用星号来指示所有其他资源/文件都需要因特网连接。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NETWORK:\n*\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"fallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback","aria-hidden":"true"}},[a._v("#")]),a._v(" FALLBACK")]),a._v(" "),s("p",[a._v("下面的 "),s("code",[a._v("FALLBACK")]),a._v(" 字段规定如果无法建立因特网连接，则用 "),s("code",[a._v("offline.html")]),a._v(" 替代 "),s("code",[a._v("/html5/")]),a._v(" 目录中的所有文件。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("FALLBACK:\n/html/ /offline.html\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("em",[s("strong",[a._v("注意: 第一个 URI 是资源，第二个是替补。")])])]),a._v(" "),s("h4",{attrs:{id:"完整的-manifest-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整的-manifest-文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 完整的 Manifest 文件")]),a._v(" "),s("div",{staticClass:"language-appcache line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CACHE MANIFEST\n# 2012-02-21 v1.0.0 \n/theme.css\n/logo.gif\n/main.js\n\nNETWORK:\nlogin.php\n\nFALLBACK:\n/html/ /offline.html\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[s("em",[s("strong",[a._v("注意：浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。")])])]),a._v(" "),s("p",[a._v("参考："),s("a",{attrs:{href:"https://www.runoob.com/html/html5-app-cache.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.runoob.com/html/html5-app-cache.html"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"_5-可以使用-canvas-api、svg-等绘制高性能的动画。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-可以使用-canvas-api、svg-等绘制高性能的动画。","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 可以使用 Canvas API、SVG 等绘制高性能的动画。")])])}),[],!1,null,null,null);t.default=n.exports}}]);