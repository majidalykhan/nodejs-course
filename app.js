// CommonJS - Every file is a module
// Modules - Encapsulated Code (share minimum)

const names = require("./modules/names");
const sayHi = require("./modules/utils");


sayHi('Node');
sayHi(names.firstName);
sayHi(names.secondName);
