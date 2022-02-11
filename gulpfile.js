const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('default', function(cb){
    console.log(1)
    cb()
})

gulp.task('scss', function(cb){
    gulp.src(["src/*.scss"])
    .pipe(sass())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src"))
     cb()
})
