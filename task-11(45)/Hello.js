let figlet = require("figlet");

figlet("Hello World!!", (err, data) => {
  if (err) {
    console.dir(err);
  }
  console.log(data);
});
