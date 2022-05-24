const authorize = (req, res, next) => {
  console.log("Authorize - Just an example of another middleware function");
  next();
};

module.exports = authorize;
