'use strict';

hexo.extend.filter.register('theme_inject', function(injects) {
    injects.footer.file('busuanzi','views/busuanzi.pug',{}, {cache: false});
    injects.style.push('views/busuanzi.styl');
});