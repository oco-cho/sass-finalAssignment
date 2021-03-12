/********* THE DEPENDENCIES *********/
var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

/********* TASK *********/
function css () {
    return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
};

/********* WATCH *********/
exports.default = function () {
    watch('src/*.scss', css);
    watch('src/modules/*.scss', css);
};

/********* DEFAULT TASK *********/
//exports.default = css;