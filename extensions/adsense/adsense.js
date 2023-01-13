hexo.extend.filter.register('theme_inject', function(injects) {
    injects.comment.file('adsense', 'views/adsense.pug', {}, {cache: true});
});
