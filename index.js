const { join } = require( "path" );

/**
 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/create-block/lib/init-block.js#L14
 */
module.exports = {
	pluginTemplatesPath: join(__dirname, 'plugin'),
	blockTemplatesPath: join( __dirname, 'block' ),
	defaultValues: {
		namespace: 'acf',
		slug: 'acf-blocks-starter',
		category: 'acf',
		version: '0.1.0',
		script: 'file:./index.js',
		style: 'file:./index.css',
		customScripts: {
			'start': 'wp-scripts start --webpack-src-dir=blocks --webpack-copy-php',
			'build': 'wp-scripts build --webpack-src-dir=blocks --webpack-copy-php'
		},
		folderName: './blocks'
	},
	variants: {
		static: {},
		dynamic: {
			customBlockJSON: {
				acf: {
					"mode": "preview",
					"renderTemplate": "render.php",
				}
			},
		}
	}
};
