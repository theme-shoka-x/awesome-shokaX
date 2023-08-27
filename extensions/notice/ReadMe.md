# 简介

在所有文章的开头生成提示警告

提示内容：
- 魔法网络提示
- 文章有效性提示

![图 shokax插件开发记录 - 1693117021438 - 0](https://raw.githubusercontent.com/yuan-uyume/imghub/master/%E5%9B%BE%20shokax%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95%20-%201693117019995%20-%20%24%7Bindex%7D.png)  

## 使用方法
直接下载文件，并引入插件
### 自定义内容
在`notice.pug`中修改内容

1. 魔法网络提示
```js
function addNetErrWaring() {
    addData = addData + '<p style="color: #e9546b">因网络问题只有具有魔法资质的人才能看见完整的全部内容哦~ 勇敢的你快成为魔法少女吧！</p>'
}
```

2. 文章有效性提示
```js
function addLostWaring() {
    const times = document.getElementsByTagName('time');
    if (times.length === 0) { return; }
    
    const pubTime = new Date(times[0].dateTime);  /* 文章发布时间戳 */
    const now = Date.now()  /* 当前时间戳 */
    const interval = parseInt(now - pubTime)
    /* 发布时间超过指定时间（毫秒） */
    if (interval > 3600*24*30*1000){
        const days = parseInt(interval / 86400000)
        addData = addData + 
        `<p>
        <div class="h6">文章时效性提示</div>
        <p>这是一篇发布于 ` + days + ` 天前的文章，部分信息可能已发生改变，请注意甄别。</p>
        </p>`
    }
}
```

### 增加提示
在`notice.pug`中以下内容中自定义函数并调用
```js

function 自定义函数名() {
    // 相应逻辑
    addData += "自定义内容"
}

function add() {
    const posts = document.getElementsByClassName('post');  
    if (posts.length === 0) { return; }
    addNetErrWaring()
    addLostWaring()
    自定义函数名() // 调用你自定义的函数 
    
    addData += "</div>"
    let adom = document.createElement("div");
    adom.className = 'md'
    adom.innerHTML = addData
    posts[0].insertBefore(adom, posts[0].children[0]);              
}
```

## 未来

在我手里是没有未来的，只能靠天降猛男实现以下内容：
- [ ] 通过配置来根据不同标签或分类显示不同的提示内容
- [ ] 通过配置决定启用不同的提示
- [ ] 配置超过时限来显示时效性提示