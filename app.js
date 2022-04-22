// CommonJS - Every file is a module
// Modules - Encapsulated Code (share minimum)

const names = require("./modules/names");
const sayHi = require("./modules/utils");

//This module will run without assigning to variable because we invoke function in it.
require("./modules/no-need-to-assign-this-module");

sayHi("Node");
sayHi(names.firstName);
sayHi(names.secondName);
