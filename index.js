const { join } = require( "path" );

/**
 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/create-block/lib/init-block.js#L14
 */
module.exports = {
	pluginTemplatesPath: join(__dirname, 'plugin'),
	blockTemplatesPath: join( __dirname, 'block' ),
	defaultValues: {
		slug: 'acf-blocks-starter',
		version: '0.1.0',
		category: 'acf-blocks-starter',
		editorStyle: 'file:./editor.css',
		style: 'file:./frontend.css'
	},
	customBlockJSON: {
		acf: {
			"mode": "preview"
		},
	},
	variants: {
		static: {},
		dynamic: {
			"render": "file:./render.php"
		}
	}
};
