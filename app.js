const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (firstname) => {
  console.log(`FirstName: ${firstname}`);
});
customEmitter.on("response", (firstname, lastname) => {
  console.log(`LastName: ${lastname}`);
});

customEmitter.emit("response", "Divyank", "Dubey");
