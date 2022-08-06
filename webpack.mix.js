let mix = require('laravel-mix');

mix.js('src/js/*.js', 'js');
mix.sass('src/sass/app.sass', 'css');
mix.browserSync({
  server: {},
  files: ['public/**/*', '*.html'],
});

mix.disableNotifications();

mix.setPublicPath('public');
