import path from 'path';

import postcssBEM from 'postcss-bem';
import postcssNested from 'postcss-nested';

const root = path.join(process.cwd(), 'src');
const entry = path.join(process.cwd(), 'initializers/client');

export default {
  root,

  entry: {
    bundle: entry,
    vendor: [
      'react',
      'react-dom',
      'react-image-lazy-load',
    ],
  },

  postcss: webpack => [
    postcssBEM,
    postcssNested,
  ],

  resolve: {
    root,
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-image-lazy-load': path.join(__dirname, '..', '..', '..', '..', 'lib', 'LazyLoad'),
    },
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [root, entry],
        query: {
          presets: ['react', 'es2015'],
          plugins: [
            ['react-transform', {
              transforms: [
                {
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module'],
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react'],
                },
              ],
            }],
          ],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ],
  },
};