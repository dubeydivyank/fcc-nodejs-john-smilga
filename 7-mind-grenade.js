const country = "India";
const printCountry = () => {
  console.log(country);
};

printCountry();

/**
 * NOTE: we havent exported any module
 *
 * if we require this module in another module,
 * it will execute printCountry in that module
 */
