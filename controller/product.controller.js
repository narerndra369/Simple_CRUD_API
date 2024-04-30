const Product = require('../models/product.model.js');

const getProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch{
        res.status(500).json({message: error.message});
    }
};

const getProduct = async (req,res) =>{
    try{
        const { ime } = req.params;
        const product = await Product.findOne({ ime: ime });
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};


const createProduct = async (req,res) => {
    try{
        const product = await  Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const updateProduct = async (req, res) => {
    try {
        const { ime } = req.params;
        // console.log(price);
        const updatedProduct = await Product.findOneAndUpdate({ ime: ime }, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const deleteProduct = async (req, res) => {
    try {
        const { ime } = req.params;
        // console.log(price);
        const product = await Product.findOneAndDelete({ ime: ime });
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
    
        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
    

module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}