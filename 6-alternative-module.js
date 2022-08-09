//alternate way of exporting modules using commonJS

module.exports.languages = ["js", "java", "html", "react"];
module.exports.dob = {
  dateOfBirth: "21-02-1997",
};

//
//
//   the above code is equivalent to the below code
//
//

const languages = ["js", "java", "html", "react"];
const dob = {
  dateOfBirth: "21-02-1997",
};
module.exports = { languages, dob };
