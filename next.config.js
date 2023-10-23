const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/public', // This path is where the files will be served from
            outputPath: 'static/files/', // This path is where the files will be placed in the build directory
            name: '[name].[ext]',
          },
        },
      });
    }

    return config;
  },
};
