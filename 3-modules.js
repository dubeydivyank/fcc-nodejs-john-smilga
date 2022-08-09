//Modules
//CommonJS

const name = require("./4-first-module-names");
const sayHi = require("./5-second-module-utils");
const { languages, dob } = require("./6-alternative-module");
require("./7-mind-grenade"); //will execute function inside './7-mind-grenade'

sayHi(`${name.firstname} ${name.lastname}`);
sayHi("Rajnikanth");

console.log(languages);
console.log(dob);
