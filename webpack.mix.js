let mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');


mix.webpackConfig({
   plugins: [
      new LiveReloadPlugin()
   ]
});


mix.js('resources/assets/js/main.js', 'public/js')
.sass('resources/assets/sass/main.scss', 'public/css');
