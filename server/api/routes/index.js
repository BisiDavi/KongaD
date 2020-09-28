const express = require("express");
const router = express.Router();
const Product = require("../../database/models/Product");

router.get("/", async (req, res) => {
  try {
    const getProducts = await Product.find();
    res.json(getProducts);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getAProduct = await Product.findOne(req.body.id);
    res.json(getAProduct);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const addProducts = new Product({
      name: req.body.name,
      price: req.body.price,
      formerPrice: req.body.formerPrice,
      brand: req.body.brand,
      img: req.body.img,
      category: req.body.category,
      subcategory: req.body.subcategory,
      description: req.body.description
    });
    const postProducts = await addProducts.save();
    res.json(postProducts);
  } catch (err) {
    res.json;
  }
});

router.put("/:id", (req, res) => {
  
  Product.findByIdAndUpdate(req.body.id, req.body, {
    new: true
  })
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: "no updates"
        });
      }
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(404).json({
        message: "error while updating the post"
      });
    });
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.deleteOne(req.body.id);
    res.json(`${deleteProduct}, deleted`);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
