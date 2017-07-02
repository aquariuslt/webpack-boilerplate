/* Created by Aquariuslt on 6-18-17.*/

import gulp from 'gulp';
import gutil from 'gulp-util';
import eslint from 'gulp-eslint';


import baseConfig from './config/base.config';

gulp.task('lint', () => {
  gutil.log('Eslint checking code');
  gulp.src([baseConfig.dir.src + '**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
