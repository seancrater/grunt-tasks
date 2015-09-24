exports.task = {
  dist: {
    options: {
      style: 'expanded',
      lineNumbers: true,
      sourcemap: 'none'
    },
    files: [{
      expand: true,
      cwd: '../ux/sass',
      src: [ '**/*.scss' ],
      dest: '../ux/css',
      ext: '.css'
    }]
  }
};
