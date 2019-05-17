
const withSize = require('next-size')
const withSass = require('@zeit/next-sass');
const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withSize(
  withTypescript(
    withSass({
      webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) {
          config.plugins.push(new ForkTsCheckerWebpackPlugin())
        }
        return config
      },
      cssModules: true,
      distDir: '../.next',
      pageExtensions: ['jsx', 'js'],
      // generateBuildId: async () => {
      //   // When process.env.YOUR_BUILD_ID is undefined we fall back to the default
      //   if (process.env.YOUR_BUILD_ID) {
      //     return process.env.YOUR_BUILD_ID;
      //   }

      //   return null;
      // },
      exportPathMap: async function(defaultPathMap) {
        return {
          // '/': { page: '/' },
          // '/about': { page: '/about' },
          // '/readme.md': { page: '/readme' },
          // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
          // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
          // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
        };
      },
    })
  )
)
