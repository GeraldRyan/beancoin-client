# beancoin-client
Single-spa based beancoin Front End client


## BUILDING MICRO FRONT ENDS FOR BEANCOIN APP IN ANGULAR AND REACT

See this site https://single-spa.js.org/ for more information


Instructions to run (from my understanding)

0. Clone the repo
1. Run npm install for each app, Angular and React, inside their respective dirs. 
2. 'npm run start' in the root directory
3. 'npm run start' in each individual app directory that you want to serve
4. Reference resulting js files in the index.ejs file template if not localhost. 
   
   Bottom line- you have to serve your "main.js" files given for each app and point index.ejs to them. 