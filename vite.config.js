export default {
	plugins: [
		{
			name: 'test-plugin',
			config: () => {
				return {
					build: {
						rollupOptions: {
							input: 'src/index.js',
							output: {
								// this is respected
								entryFileNames: 'entries/[name].js'
							}
						}
					},
					worker: {
						rollupOptions: {
							output: {
								// this is not respected
								entryFileNames: 'workers/[name].js'
							}
						}
					}
				};
			}
		}
	]
};
