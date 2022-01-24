# beancoin-client
Single-spa based beancoin Front End client


## BUILDING MICRO FRONT ENDS FOR BEANCOIN APP IN ANGULAR AND REACT

See this site https://single-spa.js.org/ for more information


Instructions to run (from my understanding)

0. Clone the repo
1. Run npm install for each app, Angular and React, inside their respective dirs. 
2. Serve them up. Yep run them on localhost ports or wherever, to be able to serve the js files, to be receieved inside the html file
   OR alternately build the files and serve them from elsewhere, remote or locally. One JS file for each app. You'll learn more about how browsers actually load JS and you can learn the different options and choices and pros and cons. 
3. Reference them in the index.ejs file template. For instance they're already referenced as coming from localhost. 
4. Voila - you have a single spa multi front end application. Now just build it out. 
   
   Bottom line- you have to serve your "main.js" files given for each app and point index.ejs to them. 