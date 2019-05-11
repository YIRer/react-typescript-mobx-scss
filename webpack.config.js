const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

const addons = (/* string | string[] */ addonsArg) => {
  // 애드온(addon) 목록을 노멀라이즈(Normalized) 한다.
  let addons = [...[addonsArg]].filter(Boolean); // If addons is undefined, filter it out

  return addons.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}.js`)
  );
};

module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  );

  return mergedConfig;
};
