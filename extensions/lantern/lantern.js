hexo.extend.filter.register('theme_inject', function(injects) {
    injects.footer.file('lantern', 'views/lantern.pug', {}, {cache: true});
    injects.style.push('views/lantern.styl');
});
