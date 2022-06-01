const express = require("express");
const router = express.Router();
const cars = require("../controlers/cars");

router.get("/", cars.carsList);
router.get("/:id", cars.carsById);
router.post("/", cars.carsAdd);
router.put("/:id", cars.carsUpdate);
router.delete("/:id", cars.carsDelete);

module.exports = router;
