# beancoin-client
Single-spa based beancoin Front End client


## BUILDING MICRO FRONT ENDS FOR BEANCOIN APP IN ANGULAR AND REACT

See this site https://single-spa.js.org/ for more information


Instructions to run (from my understanding)

0. Clone the repo
1. Run npm install for each app, Angular and React, inside their respective dirs.
2. run 'npm run start' in the root directory and in each individual app directory that you want to serve, or run 'npm run start-all'
3. Reference resulting js files in the index.ejs file template if not localhost. 
   
   Bottom line- serve your "main.js" for each app and point index.ejs to them. 