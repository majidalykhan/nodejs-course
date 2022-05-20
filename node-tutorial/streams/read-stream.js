const { createReadStream } = require("fs");

const stream = createReadStream("./content/big-file.txt");

stream.on("data", (result) => {
  console.log(result);
});
