  <!-- <script src="babel.js"></script>   will not load jsx component because of not babel not found-->

Source Maps :- Source maps

- help in debugging
- when lengthy and complex code used to locate the elements easily

to create Source maps - "babel ./script.js -d lib --source-maps" ; and then run command npm run build
this will create a script.js.maps in the lib folder
