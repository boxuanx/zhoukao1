const gulp = require('gulp');
const uglify = require('gulp-uglify');//压缩js
const server = require('gulp-webserver')//服务器
const concat = require('gulp-concat');//合并文件
gulp.task('server',function(){
    gulp.src('./')
        .pipe(server({
            port:8686,
            host:'localhost',
            liveload:false,
            directoryListing: {
                path: './',
                enable: true
            }
        }))
})
gulp.task('uglify',function(){
    gulp.src('./two.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dest'));
})
gulp.task('concat',function(){
    gulp.src(['./dest/one.js','./dest/two.js']).pipe(concat('three.js')).pipe(gulp.dest('./dest'));
})