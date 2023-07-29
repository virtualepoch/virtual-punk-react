module.exports = function override(config, env) {
  console.log("config");
  config.resolve.fallback = {
    fs: false,
  };
  return config;
};
