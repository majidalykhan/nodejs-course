const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// //Get
// router.get("/", getPeople);

// //POST - Javascript example
// router.post("/", createPerson);

// //Postman
// router.post("/postman", createPersonPostman);

// // PUT
// router.put("/:id", updatePerson);

// //Delete
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
