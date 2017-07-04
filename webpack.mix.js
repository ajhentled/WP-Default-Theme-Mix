let { mix } = require('laravel-mix');

mix
.setResourceRoot('dist/')
.setPublicPath('dist/')
.js('assets/js/app.js', 'js')
.sass('assets/sass/main.scss', 'css');
// .combine([
// 		'assets/css/bootstrap.css',
// 		'assets/css/style.css'
// 	], 'web/css/all.css')
// .version();

mix.webpackConfig({
    devServer: {
        overlay: true,
    },
    module: {
        rules: [
		    {
		        test: /\.(woff2?|ttf|eot|svg|otf)$/,
		        loader: 'file-loader',
		        options: {
		            name: path => {
		                if (! /node_modules|bower_components/.test(path)) {
		                    return 'fonts/[name].[ext]?[hash]';
		                }

		                return 'fonts/vendor/' + path
		                    .replace(/\\/g, '/')
		                    .replace(
		                        /((.*(node_modules|bower_components))|fonts|font|assets)\//g, ''
		                    ) + '?[hash]';
		            },
		            publicPath: '../'
		        }
		    }
        ]
    }
});
