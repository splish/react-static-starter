import * as path from 'path'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  webpack(config, { defaultLoaders }) {
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.(tsx?|js)$/,
            exclude: /node_modules/,
            use: {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        browsers: ['>0.25%']
                      }
                    }
                  ],
                  [
                    '@babel/preset-stage-2',
                    {
                      decoratorsLegacy: true
                    }
                  ],
                  '@babel/preset-react',
                  '@babel/preset-typescript'
                ],
                plugins: ['babel-plugin-emotion'],
                babelrc: false
              }
            }
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader
        ]
      }
    ]

    config.resolve.extensions.unshift('.ts', '.tsx')

    return config
  }
}
