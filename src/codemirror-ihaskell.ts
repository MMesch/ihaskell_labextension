import * as CodeMirror from 'codemirror';

CodeMirror.defineMode("ihaskell", function(config) {
    return CodeMirror.multiplexingMode(
        CodeMirror.getMode(config, "haskell"),
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
