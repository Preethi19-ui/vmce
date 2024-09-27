import Products from "../Models/schema.js";

export const createProducts = async (req, res) => {
  try {
    const newProducts = new Products(req.body);
    await newProducts.save();
    res.status(200).json({
      message: "Products Created Successfully",
      result: [newProducts],
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server error in create Products" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const Product = await Products.find();
    res.status(200).json({
      message: "Products Retrieved Successfully",
      result: Product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error in get Products" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;


  try {
    const updatedProduct = await Products.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;


  try {
    await Products.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("error in deleting product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
