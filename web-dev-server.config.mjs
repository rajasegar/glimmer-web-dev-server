import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fromRollup } from '@web/dev-server-rollup';
import * as babelModule from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
//import image from '@rollup/plugin-image';
import path from 'path';

const { babel } = babelModule;
const babelPlugin = fromRollup(babel);
const postcssPlugin = fromRollup(postcss);
//const imagePlugin = fromRollup(image);

export default {
  nodeResolve: true,
  plugins: [
    babelPlugin({
      babelHelpers: 'bundled',
      plugins: [
        '@glimmerx/babel-plugin-component-templates',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties',
      ],
    }),
    postcssPlugin({
      include: ['src/**/*.css'], 
      extract: true
    }),
    //imagePlugin()
  ],
  mimeTypes: {
    '**/*.css': 'js'
  }
};
