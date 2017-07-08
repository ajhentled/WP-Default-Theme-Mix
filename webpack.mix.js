let { mix } = require('laravel-mix');

mix.setPublicPath('dist');
mix.setResourceRoot('../');

mix
.js('assets/js/app.js', 'js')
.sass('assets/sass/main.scss', 'css')
.browserSync({
	proxy: 'wordpress.me.dev',
	files: ['dist/**/*.css', 'assets/**/*', '*.php']
})

// Source maps when not in production.
if (!mix.inProduction()) {
	mix.sourceMaps();
	mix.webpackConfig({ devtool: "inline-source-map" });
}

// Hash and version files in production.
/*if (mix.inProduction()) {
  mix.version();
}*/
