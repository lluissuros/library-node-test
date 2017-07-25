const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const nodemon = require('gulp-nodemon');

const jsFiles = ['*.js','src/**/*.js'];

gulp.task('style', () => {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', () => {
    // get dependencies, so then we dont need to specify the whole path
    // wiredep looks at dependencies in bower.json
    // then it will inject the deps in the html in
    //	<!-- bower:js -->
    //	<!-- endbower -->
    const wiredep = require('wiredep').stream;
    const inject = require('gulp-inject');
    const injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});
    const injectOptions = {
        ignorePath: '/public'
    };
    const options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], () => {
    // will run style and inject before this func
    // this func will run app.js, give environmet vars, and watch file changes
    const options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', (ev) => {
            console.log('restarting...');
        });
});
