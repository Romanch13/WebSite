let mix = require('laravel-mix');

mix.js('src/js/*.js', 'js');
mix.sass('src/sass/app.sass', 'css');

mix.browserSync({
  server: {
    baseDir: 'public',
  },
  files: ['public/**/*'],
});

mix.disableNotifications();

mix.setPublicPath('public');
