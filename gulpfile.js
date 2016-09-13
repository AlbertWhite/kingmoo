var gulp = require("gulp");   
var browserSync = require("browser-sync");
var sass = require('gulp-sass');
var reload = browserSync.reload;

gulp.task("sass",function(){

  gulp.src('dist/sass/*.scss')//input
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//set the output format
    .pipe(gulp.dest('dist/css/'));

   reload();

});

gulp.task("server",["sass"],function(){
	browserSync({
	server:{
	  baseDir: "."//set the dir for index.html
	}
	});
	gulp.watch("dist/sass/*.scss",["sass"]);
	gulp.watch("*.html",reload);

});

