const Restaurant = require("../models/RestModel");
const Review = require("../models/Review");

const CreateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.create(req.body);
    const addReview = await Restaurant.findByIdAndUpdate(
      id,
      { $push: { reviews: review } },
      { new: true }
    );

    return res.status(201).json({
      Success: true,
      data: review,
    });
  } catch (error) {
    console.log(error);
  }
};

const CreateRestaurant = async (req, res) => {
  try {
    const { name, ...body } = req.body;
    const findRestaurant = await Restaurant.findOne({ name });
    if (findRestaurant) {
      return res.json({
        Success: false,
        message: "Restaurant already registered!!",
      });
    }
    const newRest = await Restaurant.create({
      name,
      ...body,
    });
    res.status(201).json({
      Success: true,
      data: newRest,
    });
  } catch (error) {
    console.log("something went wrong!!");
  }
};

const AllRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json({
      Success: true,
      data: restaurants,
    });
  } catch (error) {
    console.log("something went wrong!!");
  }
};

const SingleRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id).populate('reviews').sort({'reviews.createdDate':-1})
    res.status(200).json({
      Success: true,
      data: restaurant,
    });
  } catch (error) {
    console.log("something went wrong!!");
  }
};

const DeleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    await Restaurant.findByIdAndDelete(id);
    res.status(200).json({
      Success: true,
      message: "Deleted!!",
    });
  } catch (error) {
    console.log("something went wrong!!");
  }
};

const UpdateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const {name, location, rating} = req.body;
    let findRestuarant = await Restaurant.findById(id)

    findRestuarant.name = name || findRestuarant.name
    findRestuarant.location = location || findRestuarant.location
    findRestuarant.rating = rating || findRestuarant.rating

    findRestuarant = await findRestuarant.save()

    res.status(200).json({
      Success: true,
      data: findRestuarant,
    });
  } catch (error) {
    console.log("something went wrong!!");
  }
};


module.exports = {
  AllRestaurant,
  CreateRestaurant,
  CreateReview,
  DeleteRestaurant,
  SingleRestaurant,
  UpdateRestaurant,
};
