const path = require('path')

const aliasPathsToResolve = [
  { name: '@react', path: path.resolve(__dirname, './react') },
  { name: '@utils', path: path.resolve(__dirname, './utils') },
]

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { defaultLoaders }) => {

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        path.resolve(__dirname, './react/'),
        path.resolve(__dirname, './utils/'),
      ],
      use: [defaultLoaders.babel],
    })

    /** Resolve aliases */
    aliasPathsToResolve.forEach((mod) => {
      config.resolve.alias[mod.name] = mod.path
    })

    return config
  },
};
