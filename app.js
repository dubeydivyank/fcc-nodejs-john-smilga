//fs module

const { readFileSync, writeFileSync } = require("fs");

//read file from a path
const firstFile = readFileSync("./content/first.txt", "utf-8");
const secondFile = readFileSync("./content/subfolder/second.txt", "utf-8");

console.log(firstFile, secondFile);

//create file to a path,
//if file alread exists it will overwrite the content
writeFileSync(
  "./content/result-sync.txt",
  `here is the result: ${firstFile}, ${secondFile}`
);
