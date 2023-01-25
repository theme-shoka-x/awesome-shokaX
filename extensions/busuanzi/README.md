# hexo-shokax-busuanzi
适用于[hexo-theme-shokaX](https://github.com/zkz098/hexo-theme-shokaX)的插件，用于向页脚插入不蒜子用于统计网站访问量和访客量。

## 使用
js安装  
或使用npm  
```bash
npm i hexo-shokax-busuanzi --save
```
默认情况下安装完毕自动开启pv和uv统计。  
若要修改，请在shokaX主题文件夹中的 `_config.yml` 中插入：（以下均为默认值）
```yaml
busuanzi:
  pv:
    enable: true
    title: 本站总访问量
    quantifier: 次
  uv:
    enable: true
    title: 本站总访客量
    quantifier: 次
```