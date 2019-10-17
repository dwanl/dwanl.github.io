# 语法和 API

1. 理解 `ECMAScript` 和 `JavaScript` 的关系。**[#](#1-理解-ecmascript-和-javascript-的关系。)**

2. 熟练运用 `es5`、`es6` 提供的语法规范。**[#](#2-熟练运用-es5、es6-提供的语法规范。)**

3. 熟练掌握 `JavaScript` 提供的全局对象（例如 `Date`、`Math`）、全局函数（例如 `decodeURI`、`isNaN`）、全局属性（例如`Infinity`、`undefined`）。**[#](#3-熟练掌握-javascript-提供的全局对象（例如-date、math）、全局函数（例如-decodeuri、isnan）、全局属性（例如infinity、undefined）。)**

4. 熟练应用 `map`、`reduce`、`filter` 等高阶函数解决问题。**[#](#4-熟练应用-map、reduce、filter-等高阶函数解决问题。)**

5. `setInterval`需要注意的点，使用 `setTimeout` 实现 `setInterval`。**[#](#5-setinterval需要注意的点，使用-settimeout-实现-setinterval。)**

6. JavaScript 提供的正则表达式 `API`、可以使用正则表达式（邮箱校验、URL解析、去重等）解决常见问题。**[#](#6-javascript-提供的正则表达式-api、可以使用正则表达式（邮箱校验、url解析、去重等）解决常见问题。)**

7. JavaScript 异常处理的方式，统一的异常处理方案。**[#](#7-javascript-异常处理的方式，统一的异常处理方案。)**

## 1. 理解 `ECMAScript` 和 `JavaScript` 的关系。

ECMAScript 和 JavaScript 的关系是：前者是后者的规格，后者是前者的一种实现，在日常场合，这两个词是可以互换的。

```js
ECMAScript 是国际标准化组织 ECMA 为 JavaScript 制定的一种标准，之所以不叫 JavaScript：
一是因为商标问题，JavaScript 本身也已经被 Netscape 公司注册为商标，只有 Netscape 公司可以合法地使用 JavaScript 这个名字。
二是想体现这门语言的制定者是 ECMA，这样有利于保证这门语言的开放性和中立性。
```

## 2. 熟练运用 `es5`、`es6` 提供的语法规范。
这个只能在实践中多积累啦。
[babel 官网 Learn ES2015](https://babeljs.io/docs/en/learn) 提供了全面的语法介绍和使用。

## 3. 熟练掌握 `JavaScript` 提供的全局对象（例如 `Date`、`Math`）、全局函数（例如 `decodeURI`、`isNaN`）、全局属性（例如`Infinity`、`undefined`）。

## 4. 熟练应用 `map`、`reduce`、`filter` 等高阶函数解决问题。

列举一些 `map`、`reduce`、`filter` 高频使用场景。

### [map 方法介绍：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
`map()` 方法返回一个新数组，其结果是该数组每个成员调用提供的函数后返回的新数组。
```js
var arr = [1, 2, 3, 4];
var newArr = arr.map(x => x * 2);
console.log(newArr); // [2, 4, 6, 8]
```

### map 方法使用场景：

##### 1. 将字符串成员转换为数组项

```js
var str = "yuanyuan";
var arr = Array.prototype.call(str, x => x + "");
console.log(arr); //["y", "u", "a", "n", "y", "u", "a", "n"]
```
##### 2. 在 React 中用来渲染列表数据
```js
const names = ["jser", "phper", "javaer", "pythener"];
const NamesList = () => (<ul>{names.map(name => <li key={name}> {name} </li>)}</ul>);
const rootElement = document.getElementById("root");
ReactDOM.render(<NamesList />, rootElement);
```

##### 3. 格式化数组对象
```js
const myUsers = [
    { name: 'jser', age: 18 },
    { name: 'phper', age: 19 },
    { name: 'javaer', age: 20 }
]
const mapFormat = myUsers.map((item) => {
    const result = [];
    result[item.name] = item.age;
    result.sex = "男";
    return result;
})
console.log(mapFormat);
// [{ jser: 18, sex: "男" },{ phper: 19, sex: "男" },{ javaer: 20, sex: "男" }]
```
### [reduce 方法介绍：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

`reduce()` 方法对数组每个元素执行一个 `reduce` 函数，将其结果汇总为单个返回值。

```js
const array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array.reduce(reducer));  // 10
```

### reduce 方法使用场景：

##### 1. 对数组进行求和
```js
参见上段代码
```
##### 2. 将二维数组转换为一维数组
```js
let array = [[1, 2], [3, 4], [5, 6]];
const reducer = (acc, cur) => acc.concat(cur);
let result = array.reduce(reducer, [])   // 将 [] 作为回到函数第一个参数
console.log(result); //[1, 2, 3, 4, 5, 6]
```

##### 3. 计算数组每个元素出现的次数
```js
let names = ['jser', 'jser', 'javaer', 'javaer', 'phper', 'pythener']
let obj = {};
names.reduce((acc, cur) => {
    acc[cur]? acc[cur]++ : acc[cur] = 1;
    return acc;
}, obj)   // 将 obj 作为回到函数第一个参数 obj

//解析：
//第一次遍历：acc = {} cur = "jser"
//第二次遍历：acc = {jser: 1} cur = "jser"
//第三次遍历：acc = {jser: 2} cur = "javaer"
//第四次遍历：acc = {jser: 2, javaer: 1} cur = "javaer"
//第五次遍历：acc = {jser: 2, javaer: 2} cur = "phper"
//第六次遍历：acc = {jser: 2, javaer: 2, phper: 1} cur = "pythener"
//第七次退出：acc = {jser: 2, javaer: 2, phper: 1, pythen: 1}  
console.log(obj) // {jser: 2, javaer: 2, phper: 1, pythen: 1}  
```

### [filter 方法介绍：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

`filter()` 方法创建一个新数组，其成员是通过提供函数测试的所有元素。
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);  // 元素的长度大于6的通过测试
console.log(result); ["exuberant", "destruction", "present"]
```
### filter 方法使用场景

##### 1. 数组去重
```js
function unique(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}
let arr = [1, 1, false, false, undefined, undefined, null, null];
unique(arr); // [1, false, undefined, null]
```


## 5. `setInterval`需要注意的点，使用 `setTimeout` 实现 `setInterval`。

**setInterval 需要注意的点：**

- `setInterval` 第一个参数可以是一个函数签名也可以是一个被引号包裹的函数调用。
    ```js
    setInterval(engine, 1000); 
    //or
    setInterval("engine()", 1000);
    ```

- 第一个参数不能传递带参数的函数。
    ```js 
    setInterval(function(args), 300)  // 报错
    ```
    
- `setInterval` 如果不使用 `clearInterval` 停止，将会一直运行，即使第二次使用传入了不同的函数处理程序。

- `setInterval` 只能在方法外使用。


**使用 setTimerout 实现 setInterval：** 
```js
// 递归调用
_setInterval();
function _setInterval() {
    console.log(1);
    let timer = setTimeout(() => {
        _setInterval();
        clearInterval(timer);
    }, 1000)
}
```

## 6. JavaScript 提供的正则表达式 API、可以使用正则表达式（邮箱校验、URL解析、去重等）解决常见问题。

### 修饰符
修饰符写在结尾的 `/` 之后，影响整个正则表达式的匹配行为。

- **`i` 不区分大小写（ignore）：**

    在匹配时忽略英文字母的大小写。

- **`g` 全局匹配（global）：**

    正则表达式默认只会返回第一个匹配结果，使用标志符 `g` 则可以返回所有匹配。

- **`m` 多行匹配（multiline）：**

    将开始和结束字符（ `^` 和 `$` ）视为在多行上工作。

    即分别匹配每一行（由 `\n` 或 `\r` 分割）的开始和结束，而不只是只匹配整个输入字符串的最开始和最末尾处。

### 字符集
用于匹配字符集中的任意一个字符。

- `[xyz]`：匹配所包含的`x`、`y`、`z` 任意一个字符。

- `[^xyz]`：补集，匹配除 `x`、`y`、`z` 以外的字符。

- `[a-z]`：匹配从 `a` 到 `z` 的任意字符。

- `[^a-n]`：补集，匹配除`a` 到 `n` 的其他字符。

- `[A-Z]`：匹配从 `A` 到 `Z` 的任意字符。

- `[0-9]`：匹配从 `0` 到 `9` 的任意数字。

```js
匹配所有的字母和数字可以写成：/[a-zA-Z0-9]/ 或者 /[a-z0-9]/i
```

### 量词
使用量词达到重复匹配的目的。

- **`{n}`**：匹配 `n` 次。

- **`{n,m}`**：匹配 `n-m` 次。

- **`{n,}`**：匹配 `>=n` 次。

- **`?`**：匹配 `0 || 1` 次。

- **`*`**：匹配 `>=0` 次，等价于 `{0,}`。

- **`+`**：匹配 `>=1` 次，等价于 `{1,}`。


### 元字符
元字符就是描述字符的字符，它用于对字符表达式的内容、转换及各种操作信息进行描述。

- **`\d`**：匹配任意数字，等价于 `[0-9]`。

- **`\D`**：匹配任意非数字字符，`\d` 的补集。

- **`\w`**：匹配任意基本拉丁字母表中的字母和数字，以及下划线，等价于 `[A-Za-z0-9_]`。

- **`\W`**：匹配任意非基本拉丁字母表中的字母和数字，以及下划线，`\w` 的补集。

- **`\s`**：匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格。

- **`\S`**：匹配一个非空白符，`\s` 的补集。

- **`\b`**：匹配一个零宽单词边界，如一个字母与一个空格之间。
    ```js
    例如 /\bno/ 匹配 "at noon" 中的 "no"。
    /ly\b/ 匹配 "possibly yesterday." 中的 "ly"。
    ```

- **`\B`**：匹配一个零宽非单词边界，如两个字母之间或两个空格之间。
    ```js
    例如，/\Bon/ 匹配 "at noon" 中的 "on"。
    /ye\B/ 匹配 "possibly yesterday." 中的 "ye"。
    ```

- **`\t`**：匹配一个水平制表符（tab)。

- **`\n`**：匹配一个换行符（newline)。

- **`\r`**：匹配一个回车符（carriage return)。

### 特殊字符
它们不会按照字面意思进行匹配，而有特殊的意义，比如前文讲过用于量词的 `?`、`*`、`+`。

其他常见的特殊字符有：

- **`\`**：转义字符。可以将普通字符转成特殊字符。也可以将特殊字符转成字面意思。
    ```js
    比如 \+ 匹配 +。
    ```

- **`.`**：匹配任意单个字符，但是换行符除外（`\n`, `\r`, `\u2028`或 `\u2029`）。
    ```js
    在字符集中 [.]，无特殊含义，即表示 '.' 的字面意思。
    ```

- **`|`**：替换字符，匹配 `|` 前或后的表达式。
    ```js
    比如需要同时匹配 "bear" 和 "pear"，可以使用 /(b|p)ear/ 或者 /bear|pear/。
    但是不能用 /b|pear/，该表达式只能匹配 "b" 和 "pear"。
    ```

- **`^`**：匹配输入的开始。
    ```js
    比如，/^A/ 不匹配 "an Apple" 中的 "A"，但匹配 "An apple" 中的 "A"。
    ```

- **`$`**：匹配输入的结尾。
    ```js
    比如，/t$/ 不匹配 "eater" 中的 "t"，但匹配 "eat" 中的 "t"。
    ^ 和 $ 在表单验证时常需要使用，因为需要验证从开始到结尾的一个完整输入，而不是匹配输入中的某一段。
    ```


### 分组
- **`(xyz)`**：捕获分组，匹配并捕获匹配项。
    ```
    例如，/(foo)/ 匹配且捕获 "foo bar." 中的 "foo"。
    被匹配的子字符串可以在结果数组的元素 [1], …, [n] 中找到，
    或在被定义的 RegExp 对象的属性 $1, …, $9中找到。
    ```
- **`(?:xyz)`**：非捕获分组，匹配但不会捕获匹配项，匹配项不能再次被访问到。

- **`\n`**：n 是一个正整数，表示反向引用，指向正则表达式中第 n 个括号（从左开始数）中匹配的子字符串。
	```js
	例如，/apple(,)\sorange\1/ 匹配 "apple, orange, cherry, peach." 中的 "apple,orange,"。
    ```

### 断言

- **`x(?=y)`**：仅匹配被 `y` 跟随的 `x`。
	```js
    例如， /bruce(?=wayne)/，如果 "bruce" 后面跟着 wayne，则匹配之。
    /bruce(?=wayne|banner)/，如果 "bruce" 后面跟着 "wayne" 或者 banner，则匹配之。
    但是，"wayne" 和 "banner" 都不会在匹配结果中出现。
    ```
	
- **`x(?!y)`**：仅匹配不被 `y` 跟随的 `x`。
	```js
    /\d+(?!.)/ 只会匹配不被 "." 跟随的数字。
     ```

**`/\d+(?!\.)/.exec('3.141')` 匹配 "141"，而不是 "3.141"。**


### 应用
#### 1. 匹配手机号码

目前国内的手机号码是 `1(3/4/5/7/8)` 开头的 `11` 位数字，因此手机号码的正则可以分解为以下几部分：

- 以 `1` 开头：`/^1/`。

- 第 `2` 位为 `3、4、5、7、8` 中的一个：`/[34578]/` 或 `/(3|4|5|7|8)/`。

- 剩余 `3-11` 位均为数字，并以数字结尾：`/\d{9}$/`。

- 组合起来即为 `/^1[34578]\d{9}$/` 或 `/^1(3|4|5|7|8)\d{9}$/`，因为使用捕获括号存在性能损失，所以推荐使用第一种写法。

#### 2. 匹配电子邮件

标准的电子邮件组成为 `<yourname>@<domain>.<extension><optional-extension>`，每部分的格式标准为（进行了相应的简化，主要为展示如何书写正则）：

- `yourname`：任意英文字母`（a-z/A-Z）`、数字`（0-9）`、下划线`（_）`、英文句点`（.）`、连字符`（-）`，长度大于 `0`。

 -`domain`：任意英文字母`（a-z/A-Z）`、数字`（0-9）`、连字符`（-）`，长度大于 `0`。

- `extension`：任意英文字母`（a-z/A-Z）`，长度 `2-8`。

- `optional-extension`：`"."` 开头，后面跟任意英文字母`（a-z/A-Z）`，长度 `2-8` 可选。

每部分的正则表达式为：

- **yourname**：`/[a-z\d._-]+/`；

- **domain**：`/[a-z\d-]+/`；

- **extension**： `/[a-z]{2,8}/`；

- **optional-extension**：`/(.[a-z]{2,8})?/`。

组合起来形成最后的正则表达式：`/^([a-z\d._-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/`；为了增加可读性可以将每部分用 `"()"` 包起来，并不要忘记起始和结束符 `^$`。

*本节参考[还不会正则表达式？看这篇！](https://mp.weixin.qq.com/s/f6ii_hKgY0gLdhMFda6S6Q)*

## 7. JavaScript 异常处理的方式，统一的异常处理方案。

异常处理的方式：使用 `try...catch` 捕获异常并抛出、在一些不合理的情况下主动抛出异常 `throw...`。 