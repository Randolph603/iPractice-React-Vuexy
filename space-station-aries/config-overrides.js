const path = require('path');
const SassRuleRewire = require('react-app-rewire-sass-rule');
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  config = alias({
    '@assets': path.resolve(__dirname, 'src/@core/assets'),
    '@components': path.resolve(__dirname, 'src/@core/components'),
    '@layouts': path.resolve(__dirname, 'src/@core/layouts'),
    '@styles': path.resolve(__dirname, 'src/@core/scss'),

    '@src': path.resolve(__dirname, 'src'),
    '@store': path.resolve(__dirname, 'src/redux'),
    '@configs': path.resolve(__dirname, 'src/configs'),
    '@utils': path.resolve(__dirname, 'src/utility/Utils'),
    '@hooks': path.resolve(__dirname, 'src/utility/hooks')
  })(config, env)

  config = new SassRuleRewire()
    .withRuleOptions({
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['node_modules', 'src/assets']
            }
          }
        }
      ]
    })
    .rewire(config, env)
  return config
}
