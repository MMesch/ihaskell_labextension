import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';

import CodeMirror from 'codemirror';

import 'codemirror/mode/meta';

import 'codemirror/mode/haskell/haskell';


/**
 * Define an IPython codemirror mode.
 *
 * It is a slightly altered Python Mode with a `?` operator.
 */
CodeMirror.defineMode('ihaskell', (config: CodeMirror.EditorConfiguration, modeOptions?: any) => {
    let haskellConf: any = {};
    for (let prop in modeOptions) {
      if (modeOptions.hasOwnProperty(prop)) {
        haskellConf[prop] = modeOptions[prop];
      }
    }
    haskellConf.name = 'haskell';
    haskellConf.singleOperators = new RegExp('^[\\+\\-\\*/%&|@\\^~<>!\\?]');
    haskellConf.identifiers = new RegExp('^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*');
    return CodeMirror.getMode(config, haskellConf);
}, 'haskell');

CodeMirror.defineMIME('text/x-ipython', 'ipython');
CodeMirror.modeInfo.push({
  ext: [],
  mime: 'text/x-ihaskell',
  mode: 'ihaskell',
  name: 'ihaskell'
});
/**
 * Initialization data for the ihaskell_labextension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'ihaskell_labextension',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension ihaskell_labextension is activated!');
  }
};

export default extension;
