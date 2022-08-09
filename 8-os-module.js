//OS module
//provides many useful properties & methods for interaction with OS as well as server

const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//get system's uptime in seconds
console.log(`System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
