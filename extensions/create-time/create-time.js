hexo.extend.filter.register('theme_inject', function(injects) {
    injects.status.file('timer', 'views/create-time.pug', {}, {cache: true});
});
