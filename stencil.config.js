const { sass } = require('@stencil/sass');

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
  plugins: [ sass() ],
  devServer: {
    openBrowser: false
  }
};
