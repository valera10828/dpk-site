module.exports = function override(config, env) {
  // Add the watchOptions to ignore System Volume Information
  config.watchOptions = {
    ignored: [
      '**/node_modules',
      '**/System Volume Information',
      'E:/System Volume Information/**'
    ]
  };
  
  return config;
};