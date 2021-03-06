const path = require('path');
function resolve(dir) {
  return path.join(__dirname, "../", dir);
}

const config = {
  projectName: 'oit-h5',
  date: '2021-3-8',
  designWidth: 375,
  deviceRatio: {
    640: 1.707,
    750: 2,
    828: 2.208
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    pxtransform: {
      enable: false,
    },
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain, webpack) {
      chain.merge({
        resolve: {
          alias: {
            '@': resolve('src'),
          }
        }
      })
    }

  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@/components': 'src/components',
    '@/styles': 'src/assets/less',
    "@/images": 'src/assets/images'
  },
  webpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@/components': 'src/components',
        '@/styles': 'src/assets/less',
        "@/images": 'src/assets/images'
      }
    }
  }

}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
