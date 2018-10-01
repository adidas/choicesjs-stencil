const { sass } = require('@stencil/sass');
const sassInlineSvg = require('sass-inline-svg');

exports.config = {
  namespace: 'ChoicesJSStencil',
  bundles: [
    {
      components: [ 'choicesjs-stencil' ]
    }
  ],
  outputTargets: [
    {
      type: 'dist'
    }, {
      type: 'www',
      indexHtml: './index.html'
    }
  ],
  plugins: [
    sass({
      functions: {
        'svg-inline': sassInlineSvg('node_modules/choices.js/assets/icons')
      }
    })
  ]
};
