import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


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
