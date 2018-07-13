import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import './codemirror-sos';

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
  console.log('ihaskell codemirror activated');
}


export default extension;
