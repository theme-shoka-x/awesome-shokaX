hexo.extend.filter.register('theme_inject', function(injects) {
    injects.bodyEnd.file('post_notice', 'views/notice.pug', {}, {cache: true});
});