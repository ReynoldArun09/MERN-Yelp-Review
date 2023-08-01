const express = require("express");
const {
  AllRestaurant,
  CreateRestaurant,
  CreateReview,
  DeleteRestaurant,
  SingleRestaurant,
  UpdateRestaurant,
} = require("../controller/RestController");

const router = express.Router();

router.post("/review/:id", CreateReview);
router.post("/create", CreateRestaurant);
router.get("/", AllRestaurant);
router.get("/:id", SingleRestaurant);
router.delete("/delete/:id", DeleteRestaurant);
router.put("/edit/:id", UpdateRestaurant);

module.exports = router;
