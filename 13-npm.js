//npm - global command, comes with node
//npm --version or npm --v

//local dependencies - use it only in current project
// npm i <packageName>

//global dependency - use it in any project
//npm i -g <packageName>
//sudo npm i -g <packageName> (mac)

//in order to use npm to install packages we need to initialize npm first
//It can be done in 3 ways
//  1 - manual approach - create package.json in root , write properties etx
//  2 - npm init (step by step, press enter to skip)
//  3 - npm init -y (everything default)

//it will create a package.json file in root directory and it stores all the information about the third-party module that we have installed as a dependency.
// installing npm package will create a node_module folder which npm uses to store all the codes of the npm module you have installed.
// add a module as a dependency by listing it in the dependencies property in the package.json file,
//and npm creates a package-lock.json file. This is used to store information about the modules you’ve installed which helps keep things fast and secure.

const _ = require("lodash");

const items = [1, [2, [2, 3, 4, [5, 6]]]];
const flatItems = _.flattenDeep(items);
console.log(flatItems);
