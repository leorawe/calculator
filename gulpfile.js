var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('default', function(done){
//         console.log('hi there');
//         done();
// });

//Styles Task
gulp.task('styles', function(done){
    //console.log('placeholder for styles')
    gulp.src('scss/**/*.scss', )
    .pipe(sass())
    .pipe(gulp.dest('css/'));
    done();
});

//watch scss
gulp.task('watch', function(done){
    gulp.watch('scss/*.scss', gulp.series('styles'));
    done();
});

//gulp.task('default', 'styles');
gulp.task('default', gulp.parallel('styles'));