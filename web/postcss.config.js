import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'

const mode = process.env.NODE_ENV
const dev = mode === 'development'

export default {
	map: false,
	plugins: [
		postcssPresetEnv({
			stage: 2,
			features: {
				'custom-properties': false,
				'nesting-rules': true,
				'oklab-function': {
					preserve: true,
					subFeatures: { displayP3: false }
				}
			}
		}),
		!dev &&
			cssnano({
				preset: [
					'default',
					{
						// For some reason these need to be disabled otherwise it breaks with
						// container queries.
						normalizeWhitespace: false,
						discardComments: false
					}
				]
			})
	]
}
