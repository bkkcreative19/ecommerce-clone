import { request } from "express";
import Item from "../models/product.js";

// Get all Products
const fetchProducts = async (req, res) => {
  const items = await Item.find({});
  res.json(items);
};

const submitProduct = async (req, res) => {
  const { name, price, imgUrl, gender } = req.body;

  console.log(name, price, imgUrl, gender);
  // res.json({ name, price, imgUrl, gender });

  const item = await Item.create({
    name,
    price,
    imgUrl,
    gender,
  });

  if (item) {
    res.status(201).json({
      _id: item._id,
      name: item.name,
      price: item.price,
      imgUrl: item.imgUrl,
      gender: item.gender,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  // const items = await Item.find({});
  // res.json(items);
};

const fetchProduct = async (req, res) => {
  const item = await Item.find({ name: req.params.name });
  res.json(item);
  // console.log(req.params.name);
};

export { fetchProducts, submitProduct, fetchProduct };
