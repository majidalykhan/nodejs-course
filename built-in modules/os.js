const os = require("os");

//Current user info
const user = os.userInfo();
console.log(user);

//System uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

//Current operating system info

const currentOS = {
  nameOS: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
