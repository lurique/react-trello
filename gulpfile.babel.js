// Requiring necessary packages
import gulp from 'gulp'
import babel from 'gulp-babel'
import changed from 'gulp-changed'
import concat from 'gulp-concat'
import connect from 'gulp-connect'
import cssnano from 'gulp-cssnano'
import imagemin from 'gulp-imagemin'
import livereload from 'gulp-livereload'
import htmlmin from 'gulp-minify-html'
import cssmin from 'gulp-minify-css'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import rev from 'gulp-rev'
import revCollector from 'gulp-rev-collector'
import sass from 'gulp-sass'
import uglify from 'gulp-uglify'
import util from 'gulp-util'
import del from 'del'

// Creating paths for project dependencies
const PATH = {
	html: 'src/',
	sass: 'src/sass/',
	js: 'src/js/',
	img: 'src/img/',
	src: 'src/',
	build: 'build/',
	revDir: 'rev/',
	dist: 'dist/'
}

// Swallow errors preventing gulp from stopping
const swallowError = (err) => {
	util.beep()
	util.log(util.colors.red(err))
	this.emit(err)
}

// Server listener
const igniteServer = () => {
	return connect.server({
		root: PATH.build,
		livereload: true
	})
}

// HTML task
gulp.task('html', () => {
	return gulp.src(PATH.html.concat('**/*.html'))
						 .pipe(gulp.dest(PATH.build.concat('/')))
						 .pipe(livereload())
})

// CSS task
gulp.task('css', () => {
	return gulp.src(PATH.sass.concat('**/*.sass'))
						 .pipe(sass({
							 	includePaths: require('node-neat').includePaths,
							 	style: 'nested',
							 	swallowError: () => {
							 		console.log('Error ocurred when transpiling sass')
							 	}
						 }))
						 .pipe(cssnano())
						 .pipe(cssmin())
						 .pipe(plumber({errorHandler: swallowError}))
						 .pipe(gulp.dest(PATH.build.concat('/css')))
						 .pipe(livereload())
})

// JS task
gulp.task('js', () => {
	return gulp.src(PATH.js.concat('**/*.js'))
						 .pipe(plumber({ errorHandler: swallowError }))
						 .pipe(babel({
						 		presets: ['es2015']
						 }))
						 .pipe(uglify())
						 .pipe(changed(PATH.build.concat('/js')))
						 .pipe(gulp.dest(PATH.build.concat('/js')))
						 .pipe(livereload())
})

// Image task
gulp.task('img', () => {
	return gulp.src(PATH.img.concat('**/*.+(png|jpg|jpeg|gif|svg)'))
						 .pipe(changed(PATH.build.concat('/img')))
						 .pipe(gulp.dest(PATH.build.concat('/img')))
						 .pipe(livereload())
})

// Watch task
gulp.task('watch', () => {
	gulp.watch(PATH.html.concat('**/*.html'), ['html'])
	gulp.watch(PATH.sass.concat('**/*.sass'), ['css'])
	gulp.watch(PATH.js.concat('**/*.js'), ['js'])
	gulp.watch(PATH.img.concat('**/*.+(png|jpg|jpeg|gif|svg)'), ['img'])
})

// Build task
gulp.task('build', ['html', 'css', 'js', 'img'], () => {
	igniteServer()
})

const ENV = process.env.SERVER_ENV || 'development'

if ( ENV === 'development' )
	gulp.task('default', ['build', 'watch'])

