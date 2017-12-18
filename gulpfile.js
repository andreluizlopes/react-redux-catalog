const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

/* eslint-disable prefer-arrow-callback */
gulp.task("sass", function() {
    gulp.src("./src/assets/sass/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(sass({outputStyle: "compressed"}))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./src/assets/css"));
});

gulp.task('catalog-build', ['sass', 'build']);


/* eslint-disable prefer-arrow-callback */
gulp.task("watch", function() {
    gulp.watch("./src/assets/**/*.scss", ["sass"]);
});