 Babel can generate source map files. When Babel transpiles code from a modern JavaScript version (like ES6+) to an older version (like ES5), it can create a source map to map the transformed code back to the original source code. This is useful for debugging and ensuring that errors and stack traces are shown with reference to the original code rather than the transformed code.
  
  <!-- <script src="babel.js"></script>   will not load jsx component because of not babel not found-->

  <script src=lib/script.js ></script>  /// this file will be loaded

Source Maps :- Source maps

- help in debugging
- when lengthy and complex code used to locate the elements easily

to create Source maps - "babel ./script.js -d lib --source-maps" ; and then run command npm run build
this will create a script.js.maps in the lib folder
