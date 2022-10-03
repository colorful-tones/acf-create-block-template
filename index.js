const { join } = require( "path" );

/**
 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/create-block/lib/init-block.js#L14
 */
module.exports = {
	pluginTemplatesPath: join(__dirname, 'plugin-templates'),
	blockTemplatesPath: join( __dirname, 'block-templates' ),
	defaultValues: {
		slug: 'acf-blocks-starter',
		version: '0.1.0',
		category: 'acf-blocks-starter',
		editorStyle: 'file:./index.css',
		editorScript: 'file:./index.js',
		style: 'file:./style-index.css'
	},
	variants: {
		static: {},
		dynamic: {
			acf: {
				"mode": "preview"
			},
			"render": "file:./render.php"
		}
	}
};
