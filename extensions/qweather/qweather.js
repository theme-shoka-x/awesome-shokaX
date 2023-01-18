hexo.extend.filter.register('theme_inject', function(injects) {
    injects.rightNav.file('qweather', 'views/qweather.pug', {}, {cache: true});
    injects.bodyEnd.file('loader','views/loader.pug', {}, {cache: true})
    injects.style.push('views/qweather.styl');
});
