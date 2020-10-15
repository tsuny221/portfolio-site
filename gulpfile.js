const { src, dest, watch } = require("gulp");
const stylus = require("gulp-stylus");
const pug = require("gulp-pug");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

// Sassをコンパイルする
const compileStylus = () =>
   src("src/css/*.styl")
   .pipe(
       stylus({
           outputStyle: "expanded"
       })
   ).pipe(postcss([
      autoprefixer({
      cascade: false
    })
    ]))
    .pipe(dest("dest/css"));

// Stylusファイルを監視
const watchStylusFiles = () =>
  watch("src/css/*.styl", compileStylus);

// pugをコンパイルする
const compilePug = () =>
   src("src/*.pug")
   .pipe(
       pug({
           pretty: true
       })
   )
   .pipe(dest("dest"));

// pugファイルを監視
const watchPugFiles = () =>
   watch("src/*.pug", compilePug);

// npx gulpで実行される関数
exports.default = () =>
   watchStylusFiles();
   watchPugFiles();
