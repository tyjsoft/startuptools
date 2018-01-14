const gulp = require('gulp');
const babel = require('gulp-babel');
// Gulp depencdencies go here

gulp.task('default', function() {
    // Node source
    gulp.src("es6/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));
    //browser source
    gulp.src("public/es6/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("public/dist"));

//  Signal async
    return new Promise(function(resolve, reject) {
        console.log("default task run");
        resolve();
    });
});
