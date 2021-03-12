//The dependencies
var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

//Task
function css () {
    return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
};

//Watch Function
exports.default = function () {
    watch('src/*.scss', css);
    watch('src/modules/*.scss', css);
};

//Default Task
//exports.default = css;