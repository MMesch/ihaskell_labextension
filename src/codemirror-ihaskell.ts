import * as CodeMirror from 'codemirror';

import 'codemirror/lib/codemirror';
import 'codemirror/mode/haskell/haskell';
import 'codemirror/mode/python/python';
import 'codemirror/mode/r/r';
import 'codemirror/mode/octave/octave';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/sas/sas';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/julia/julia';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/meta';

CodeMirror.defineMode("ihaskell", (config) => {
    console.log('defining mode');
    return CodeMirror.multiplexingMode(
        CodeMirror.getMode(config, "Haskell"),
        {
           open: /:(?=!)/, // Matches : followed by !, but doesn't consume !
           close: /^(?!!)/, // Matches start of line not followed by !, doesn't consume character
           mode: CodeMirror.getMode(config, "text/plain"),
           delimStyle: "delimit"
        }
        );
});

CodeMirror.defineMIME("text/x-ihaskell", "ihaskell");

CodeMirror.modeInfo.push({
  ext: ['ihaskell'],
  mime: "text/x-ihaskell",
  mode: 'ihaskell',
  name: 'ihaskell'
});
