const { mix } = require('laravel-mix');

mix.js('./js/app.js', 'public/')
   .sass('./sass/app.scss', 'public/');
