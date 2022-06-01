const { Car, User } = require("../models");

const carsList = async (req, res, next) => {
  try {
    const cars = await Car.findAll({
      include: User,
    });
    return res.status(200).json({ msg: "list", cars });
  } catch (err) {
    return res.status(500).send({ err });
  }
};
const carsAdd = async (req, res, next) => {
  try {
    const data = req.body;
    const car = new Car(data);
    await car.save();
    return res.status(200).json({ msg: "add", car });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const carsById = async (req, res, next) => {
  try {
    const carId = req.params.id;
    const car = await Car.findByPk(carId);
    res.status(200).json({ msg: "get car by id", car });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const carsUpdate = async (req, res, next) => {
  try {
    const carId = req.params.id;
    const data = req.body;
    const result = await Car.update(data, {
      where: {
        id: carId,
      },
    });
    return res.status(200).json({ msg: "update", carId, result });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const carsDelete = async (req, res, next) => {
  try {
    const carId = req.params.id;
    const result = await Car.destroy({
      where: {
        id: carId,
      },
    });
    return res.status(200).json({ msg: "delete post", postId, result });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};

module.exports = {
  carsList,
  carsAdd,
  carsById,
  carsUpdate,
  carsDelete,
};
