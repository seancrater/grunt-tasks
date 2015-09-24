exports.task = {
  my_target: {
    files: [{
      expand: true,
      cwd: '../ux/css/',
      src: [ '*.css', '!*.min.css' ],
      dest: '../ux/css/',
      ext: '.css'
    }]
  }
};
