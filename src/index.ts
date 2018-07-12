import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import CodeMirror from 'codemirror';

import {
  Mode
} from '@jupyterlab/codemirror';

import '../style/index.css';


/**
 * Initialization data for the extension1 extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: '2_commands_and_menus',
  autoStart: true,
  requires: [],
  activate: (app: JupyterLab) =>
  {
    app.serviceManager.ready
      .then(() => {defineIHaskell()});
  }
};

function defineIHaskell() {
  Mode.defineMode('ihaskell', (config: CodeMirror.EditorConfiguration, modeOptions?: any) => {
    CodeMirror.defineMode("ihaskell", (config) => {
      return CodeMirror.multiplexingMode(
        CodeMirror.getMode(config, "haskell"),
        {
          open: /:(?=!)/, // Matches : followed by !, but doesn't consume !
          close: /^(?!!)/, // Matches start of line not followed by !, doesn't consume character
          mode: CodeMirror.getMode(config, "text/plain"),
          delimStyle: "delimit"
        }
      );}
  }, 'Haskell');

  Mode.defineMIME('text/x-ihaskell', 'ihaskell');
  Mode.getModeInfo().push({
    ext: [],
    mime: 'text/x-ihaskell',
    mode: 'ihaskell',
    name: 'ihaskell'
  });

  console.log('CodeMirror.listModes=>');
  console.log(Mode.getModeInfo());
}


export default extension;
