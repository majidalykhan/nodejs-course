const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "mak") {
    req.user = { name: "mak", id: 2 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
