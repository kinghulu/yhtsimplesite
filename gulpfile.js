'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


var u_app='app/'; //app
var u_css=u_app+'css/'; //css
var u_js=u_app+'js/'; //js
var u_images=u_app+'images/'; //images

// 监视文件改动并重新载入
gulp.task('serve',function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch([u_app+'*.html', u_css+'**/*.css', u_js+'**/*.js'], reload);
});