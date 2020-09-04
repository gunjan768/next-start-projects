const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

// We can easily generate the service worker usign webpack plugin. Used to expose the service worker which is already there in Next. 
module.exports = 
{
	webpack: config => 
	{
		config.plugins.push(new SWPrecacheWebpackPlugin(
		{
			minify: true,
			staticFileGlobsIgnorePatterns: [/\.next\//],
			runtimeCaching: 
			[
				{
					handler: "networkFirst",
					urlPattern: /^https?.*/
				}
			]
		}));

		return config;
	}
};