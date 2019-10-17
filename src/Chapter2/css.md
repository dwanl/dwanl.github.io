# CSS

1. CSS 盒模型，在不同浏览器下的差异。**[#](#1)**

2. CSS 所有选择器及其优先级、使用场景，哪些可以继承，如何运用 at 规则。**[#](#2)**

3. CSS 伪类和伪元素有哪些，它们的区别和实际应用。**[#](#3)**

4. HTML 文档流的排版规则，CSS 几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理。**[#](#4)**

5. 水平垂直居中的方案、可以实现 6 种以上并对比它们的优缺点。**[#](#5)**

6. BFC 实现原理，可以解决的问题，如何创建 BFC。**[#](#6)**

7. 可使用 CSS 函数复用代码，实现特殊效果。**[#](#7)**

8. PostCSS、Sass、Less 的异同，以及使用配置，至少掌握一种。**[#](#8)**

9. CSS 模块化方案、如何配置按需加载、如何防止 CSS 阻塞渲染。**[#](#9)**

10. 熟练使用 CSS 实现常见动画，如渐变、移动、旋转、缩放等等。**[#](#10)**

11. CSS 浏览器兼容性写法，了解不同API在不同浏览器下的兼容性情况。**[#](#11)**

12. 掌握一套完整的响应式布局方案。**[#](#12)**



<h2 id="1">1. CSS 盒模型，在不同浏览器下的差异。</h2>

### 标准盒模型和怪异盒模型：

- **标准盒模型**：宽度只是内容（content）的宽度。

    ![1265396-20171119143703656-1332857321.png](https://i.loli.net/2019/09/30/D7Wl59TfMQcdmwG.png)

- **怪异（IE）盒模型**：宽度是内容（content）+ 填充（padding）+ 边框（border）的总宽度。

    ![1265396-20171119144229156-49945808.png](https://i.loli.net/2019/09/30/imUEr4skWPlI2dF.png)

### 设置盒模型：
使用 CSS3 新增的属性 `box-sizing` 可以模拟标准盒模型和怪异盒模型。

- **content-box**：默认值，标准盒模型。

    ```css
    /* 标准模型 */
    box-sizing: content-box;
    ```
- **border-box**：IE 盒子模型。

    ```css
    /* IE 盒模型 */
    box-sizing: border-box;
    ```
- **padding-box**：`padding` 计算入 `width` 内。

##### 注意：
```js
ie8+ chrome 浏览器支持 content-box 和 border-box 属性。
Firfox （2-49）支持 padding-box 属性。
IE 浏览器在 getComputedStyle 得到的 width/height 是按照标准模式计算的，而不论 box-sizing 的取值。
```


<h2 id="2">2. CSS 所有选择器及其优先级、使用场景，哪些可以继承，如何运用 @ 规则。</h2>

#### CSS 选择器优先级及使用场景：

1. 在属性后面使用 `!important`， 权重最高。

2. 内联样式，如 `style=""`，权重 `1000`。

3. `id` 选择器，如 `#header`，权重 `100`。

4. 类、伪类、属性选择器，如 `.header div:last-child input[type="text"]`，权重 `10`。(伪类使用 `:`)

5. 元素、伪元素选择器，如 `div p ::before`，权重 `1`。(伪元素使用`::`)
   
6. 通配符、子选择器、相邻选择器，如 `*、>、+`，权重 `0`。
   
7. 继承的样式、浏览器默认的属性，没有权重。


|选择器	|权重
|----|----
|!important|	1/0(无穷大)
|内联样式|	1000
|ID|	100
|类/伪类/属性	|10
|元素/伪元素|	1
|通配符/子选择器/相邻选择器|	0


```js
!important > 内联样式 > ID 选择器 > 类选择器 > 元素选择器 > 通配符（*）选择器 > 浏览器默认属性
```
#### 继承性：

1. 以 `color`、`font-`、`text-`、`line` 开头属性可继承。

2. 只要是后代就可继承。

3. `<a>` 标签文字颜色和下划线无法继承。

4. `<h>` 标签的文字大小无法继承。

#### @ 规则：

`at`规则由一个 `@` 关键字和后续的一个区块组成，如果没有区块，则以分号结束。

##### @charset

用于提示 `css` 文件使用的字符串编码方式，它如果被使用，必须出现在最前面。

这个规则只是在给出语法解析阶段前使用，并不影响页面上展示效果。

```css
@charset "utf-8"
```
##### @import

用于引入一个 `css` 文件，除 `@charset` 规则不会被引入外，可以引入一个文件的全部内容。

```css
@import "style.css";
@import url("style.css");
```
##### @ media

对设备类型进行判断，用于媒体查询。

```css
@media screen and (max-width: 600px) {
    body {
        background: blue;
    }
}
```
##### @keyframes

`@keyframes` 规则用于定义动画关键帧。创建动画的原理是：将一套 `CSS` 样式逐渐变化为另一套样式。

```css
@keyframes .move {
    from: { top: 0px; }
    to: { top: 20px; }
}
```

##### @fontace
`@fontace` 用于定义字体，`iconfont` 技术就是利用这个特性来实现。
```css
@font-face{
	font-family: myFirstFont;
    src: url('Sansation_Light.ttf') 
        ,url('Sansation_Light.eot'); /* IE9 */
}
div {
	font-family: myFirstFont;
}
```

##### 其他：
- **@page**：用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型结构，除了页面本身，还可以设置它周围的盒。

- **@counter-style**： 产生一种数据，用于定义列表项的表现。

- **@support**：support 检查环境的特性，它与 `media` 比较类似。

- **@namespace**：用于跟 `xml` 命名空间配合的一个规则，表示内部的 `css` 选择器全都带上特定命名空间。

- **@viewport**：用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被 `html`的 `meta` 代替。

- **@color-profile**

- **@document**

- **@font-feature-values**


<h2 id="3">3. CSS 伪类和伪元素有哪些，它们的区别和实际应用。</h2>

#### CSS 伪类：

CSS 伪元素是用来对一些选择器添加特殊效果。

- **:link**：     用于设置未被访问的链接的样式。

- **:visited**：  用于设置已经被访问的链接的样式。

- **:hover**：    用于设置将鼠标悬浮在链接上的样式。

- **:active**：   用于设置鼠标点击链接时到鼠标松开时的样式。

- **:focus**：    用于设置用键盘将焦点放在链接上时的样式（如用tab键或者上下键来移动页面焦点时）。


- **:first-child**：选中列表中的第一个元素。

- **:last-child**：选中列表中的最后一个元素。

- **:nth-child()**：括号里面的取值可以为三类。
	```js
    1. 数字： :nth-child(3) 表示选中父元素的第三个子元素。
	2. 自变量为 n 的表达式： :nth-child(3n) 代表选中父元素的第3 6 9 .. 3n 的子元素。
	3. even 或者 odd： 分别代表选中父元素的奇数或者偶数个子元素。
    ```
- **:nth-last-child()**：与 `:nth-child()` 的不同点在于，这个是从最后一个元素开始计算，取值都是一样的。 

- **:not(name)**：除了 `name` 以外的元素。

#### CSS 伪元素：

CSS 伪元素是用来对一些选择器添加特殊效果。

*CSS 伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，并不存在于文档中，所以称为伪元素。*

<img width="60%" alt="css伪元素" src="http://qiniu.mdnice.com/50ff5d10c5a8a83731a2fb8638171a09.png">

1. **::first-letter**：用于向文本的首字母设置特殊样式。

2. **::first-line**：用于向文本的首行设置特殊样式。

3. **::before**：可以向元素内容的前面插入新内容。

4. **::after**：可以向元素内容的后面插入新内容。

5. **::selection**

6. **::placeholder**

7. **::backdrop**


#### 伪类和伪元素的区别：

1. 为了避免混淆，`css3` 中的标准规定伪类使用单冒号 `:` ，伪元素使用双冒号 `::`，为了保证兼容伪元素两种使用方法都是可以的。

2. 伪类可以叠加使用，而伪元素在一个选择器中只能出现一次，并且只能出现在末尾。
    ```css
    .content:first-child:hover { color: #fff;}   //使用伪类
    .content:first-letter { color: #fff;}   //使用伪元素
    .conrent:first-letter:hover { color: #fff;}   //错误写法 
    ```

3. 伪类和类的优先级相同，伪元素和元素的优先级相同。



<h2 id="4">4. HTML 文档流的排版规则，CSS 几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理。</h2>

### 文档流的排版规则

元素默认从左向右、从上到下进行排列。

标准文章流分为：**块级元素**和**行内元素**。

**块级元素：**独占一行，水平方向不能与其他元素并排显示，可设置宽、高，宽度默认为父级的100%。
**行内元素：**


<h2 id="5">5. 元素水平垂直居中的方案、可以实现 6 种以上并对比它们的优缺点。</h2>

<img alt="元素居中" width="30%" src="http://qiniu.mdnice.com/164c36b8b16a017a344a634667b05eb8.png">

#### 1. 绝对定位 transform 变形 （不定宽高）

*IE8 不支持*

采用 `transform: translate(-50%, -50%)` ，父元素设置相对定位 `position: relative`。

```css
body {
    position: relative;
}
div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: red;
}
```


#### 2. 弹性盒模型 （不定宽高）

*兼容性不好，主要应用与移动端*

当前 `div` 父级设置 `display: flex; align-items: center; justify-content: center;` 。

```css
body {
    display: flex;
    align-items: center;
    justify-content: center;
}
div {
    background: red;
}
```

#### 3. table-cell 单元格布局（不定宽高）

*不常用*

此方法是`内联块状元素`水平垂直剧中的解决方案。

将父元素设置 `dispaly: table-cell;` 转换成表格单元格。

```css
 body {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 400px;
    height: 400px;
    border:1px solid #666;
}
div {
    dispaly: inline-block;
    background: red;
}
```

#### 4. 绝对定位 margin 负间距（定宽高）

*比较流行的解决方案*

将 `margin-left` 和 `margin-top` 的值为当前 `div` 宽度的一半的负值。

```css
div {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background: red;
}
```
#### 5. 绝对定位 margin：auto（定宽高）

*不确定宽高时，会充满整个屏幕。*

设置绝对定位属性 `position: absolute`， `left`、`top`、`right`、`bottom` 值均为 `0`， `margin` 值为 `auto`。

```css
div {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: red;
}
```

#### 6. 绝对定位 和 salc() （定宽高）

*IE 8 不支持*

`calc()` 函数动态计算实现水平垂直剧中。

```css
body {
    position: relative;
    width: 100%;
    height: 100%;
}
div {
    position: absolute;
    width: 200px;
    height: 50px;
    left: calc((100% - 200px)/2);
    top: calc((100% - 50px)/2);
    background: red;
}　　
```

### 总结：
```js
不宽高：
1. absolute + transform 变形
2. flex 布局 
3. table-cell 布局 （不常用）

定宽高：
1. absolute + margin 负间距离 （常用）
2. absolute + margin auto
3. absolute + calc() 函数
```


<h2 id="6">6. BFC 实现原理，可以解决的问题，如何创建 BFC。</h2>

**BFC** 即 `Block Formatting Contexts`（块级格式上下文），它的布局模式为`流动模型`，是一个独立的渲染区域。
`BFC` 决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。

**具有 `BFC` 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素。**

### BFC 的生成：

- `body` 根元素。
- `float` 的值不为 `none`。
- `overflow` 的值不为 `visible`。
- `display`的值为`inline-block`、`table-cell`、`table-caption`。
- `position` 的值为 `absolute`、`fiexd`。

### BFC 解决的问题：

#### 1. 阻止 margin 重叠（margin 塌陷问题）

在标准文档流中，块级元素之间竖直方向的 `margin` 会以大的为准，这就会导致 `margin` 重叠（塌陷）问题。

```html
<body>
    <p></p>
    <p></p>
</body>
<style>
    p {
        width: 100px;
        height: 100px;
        background: rgb(19, 149, 192);
        margin: 50px;
    }
</style>
```
<img alt="bfc" width="40%" src="http://qiniu.mdnice.com/2e633e8c5ac02c1678493bb5a2bec7bb.png">

**解决 margin 塌陷问题：将其放在不同的 `BFC` 容器中来解决，设置 `overflow: hidden;`。**

```html
<body>
    <div>
        <p></p>
    </div>
    <p></p>
</body>
<style>
    div {
        overflow: hidden;
    }
    p {
        width: 100px;
        height: 100px;
        background: rgb(19, 149, 192);
        margin: 50px;
    }
</style>
```
<img alt="bfc" width="40%" src="http://qiniu.mdnice.com/5096d81caa2cc88fc31c09a13ce8e1c7.png">


#### 2. 高度塌陷问题

在通常情况下，父元素的高度会被子元素撑开，而将其子元素设置为浮动元素时，子元素就会脱离文档流，父元素就会发生高度塌陷问题，上下边界重回。

```html
<div style="border: 1px solid #333;">
    <div class="child"></div>
</div>
<style>  
    div.child {
        float: left;
        width: 100px;
        height: 100px;
        background: rgb(19, 149, 192);
    }
</style>
```
<img alt="bfc" width="40%" src="http://qiniu.mdnice.com/17fa72870ee407c086d9e2e6c35e31e9.png">

**解决高度塌陷问题：设置 `overflow: hidden;` 将父元素变成 BFC 容器。**

```js
BFC约束准则：计算 BFC 容器的高度时，浮动元素也参与计算。
```
```html
<div style="border: 1px solid #333; overflow: hidden;">
    <div class="child"></div>
</div>
<style>  
    div.child {
        float: left;
        width: 100px;
        height: 100px;
        background: rgb(19, 149, 192);
    }
</style>
```
<img alt="bfc" width="40%" src="http://qiniu.mdnice.com/dd9bdf163c040175aa5beb718ae9466b.png">

#### 3. 阻止元素被浮动元素覆盖

由于左侧块级元素发生了浮动脱离了文档流，和右侧未发生浮动的块级元素不在同一层内，所以会发生 `div` 遮挡问题。

```html
<div class="contanier">
    <div>左浮动的元素</div>
    <div>没有触发 BFC 的元素</div>
</div>
<style>
    .contanier div:nth-child(1) {
        float: left;
        height: 100px;
        width: 100px;
        background: rgb(27, 178, 228);
    }
    .contanier div:nth-child(2) {
        width: 200px; 
        height: 200px;
        background: rgb(248, 234, 172);
    }
</style>
```

<img alt="bfc" width="40%" src="http://qiniu.mdnice.com/f12e54cdeafe5eeedfe1fa3d67683109.png">

**解决元素被这遮挡问题：给右侧元素设置 `overflow: hidden;` 触发 `BFC` 来解决。**

```js
BFC 约束准则：BFC 的区域不会与浮动的元素区域重叠。
```
```html
<div class="contanier">
    <div>左浮动的元素</div>
    <div>触发 BFC 的元素</div>
</div>
<style>
    .contanier div:nth-child(1) {
        float: left;
        height: 100px;
        width: 100px;
        background: rgb(27, 178, 228);
    }
    .contanier div:nth-child(2) {
        width: 200px; 
        height: 200px;
        overflow: hidden;
        background: rgb(248, 234, 172);
    }
</style>
```
<img alt="bfc" width="60%" src="http://qiniu.mdnice.com/47d7e0fb31a734bb5bee749cc75ad50c.png">

### 总结：

```js
1. 内部的块元素会在垂直方向上一个接一个的放置。
2. 属于同一个 BFC 的两个相邻块元素的 margin 会发生重叠（重叠）。
3. 计算BFC的高度时，浮动子元素也参与计算。（解决高度塌陷问题）。
4. BFC 容器不会与 float 的元素区域重叠。（解决浮动元素遮挡问题）。
5. BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。
```


<h2 id="7">7. 可使用 CSS 函数复用代码，实现特殊效果。</h2>

#### CSS 中的函数：
| 函数  | 描述 | CSS 版本 |
|----- |-----|-----|
|attr()|  返回选择元素的属性值 |  2 
|calc()|  允许计算 CSS 的属性值（比如动态计算长度值）| 3
|linear-gradient()| 创建一个线性渐变的图像|  3
|radial-gradient()| 用径向渐变创建图像|  3
|repeating-linear-gradient()  |用重复的线性渐变创建图像|  3
|repeating-radial-gradient()  |类似 radial-gradient()，用重复的径向渐变创建图像| 3


<h2 id="8">8. PostCSS、Sass、Less 的异同，以及使用配置，至少掌握一种。</h2>

https://blog.csdn.net/JoeBlackzqq/article/details/98885880

<h2 id="9">9. CSS 模块化方案、如何配置按需加载、如何防止 CSS 阻塞渲染。</h2>

### 如何防止 CSS 阻塞渲染

通过**媒体类型**和**媒体查询**，设置 `link` 标签的 `media` 属性值，根据特定场景（设备类型、显示、打印、屏幕方向变化、屏幕分辨率等）按需渲染 CSS 资源。

```html
<!-- 屏幕分辨率为 800px 时，渲染 style.css -->
<link href="style.css" rel="stylesheet" media="(min-width: 800px)">

<!-- 打印网页或者在打印预览模式下打开时，渲染 print.css  -->
<link rel="stylesheet" type="text/css" href="print.css" media="print"/>

<!-- 手持设备（小屏幕、有限带宽）设备时，渲染 handheld.css  -->
<link rel="stylesheet" type="text/css" href="handheld.css" media="handheld"/>
```
**注意：**无论哪一种情况，浏览器仍会下载全部 CSS 资源，只不过将不阻塞渲染资源的优先级降低罢了。



<h2 id="10">10. 熟练使用 CSS 实现常见动画，如渐变、移动、旋转、缩放等等。</h2>


<h2 id="11">11. CSS 浏览器兼容性写法，了解不同 API 在不同浏览器下的兼容性情况。</h2>


<h2 id="12">12. 掌握一套完整的响应式布局方案。<h2>
