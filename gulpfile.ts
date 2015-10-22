/// <binding BeforeBuild='tsc' />

import gulp = require("gulp");
import shell = require("gulp-shell");

gulp.task("tsc", shell.task(["tsc"]));

gulp.task("default", ["tsc"]);