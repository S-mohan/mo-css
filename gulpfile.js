const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const plumber = require('gulp-plumber')
const cleanCss = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const gulpSequence = require('gulp-sequence')

const CONFIGS = {
	sass: {
		sourceComments: true,
		outputStyle: 'expanded'
	},
	css: {
		advanced: true, //合并选择器
		keepBreaks: false, //不保留换行符
		mediaMerging: true, //合并@media
		keepSpecialComments: '*' //保留浏览器前缀
	},
	autoprefixer: {
		browsers: ['last 2 versions', 'Android >= 4.0'],
		cascade: true, //是否美化属性值 默认：true
		remove: true //是否去掉不必要的前缀 默认：true
	}
}

gulp.task('compile:sass', () => {
	return gulp.src('./scss/**/*.scss')
		.pipe(sass(CONFIGS.sass))
		.pipe(plumber())
		.pipe(autoprefixer(CONFIGS.autoprefixer))
		.pipe(gulp.dest('./css'))
})

gulp.task('watch', () => {
	gulp.watch('./scss/**/*.scss', ['compile:sass'])
})

gulp.task('default', ['watch']);