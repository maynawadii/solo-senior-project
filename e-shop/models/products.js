const mongoose = require('mongoose'); 
// Creating user schema 
const ProductSchema = mongoose.Schema({ 
    name : { 
        type : String, 
        required : true
    }, 
    description : { 
        type : String, 
        required : true
    }, 
    image: {
        type: String,
      },
    price: {
        type: Number,
      },
    colors: {
        type: String,
      },
    categorie : { 
        type : String, 
        required : true
    }  
   
}); 
  


  
// Exporting module to allow it to be imported in other files 
const Product = module.exports = mongoose.model('Product', ProductSchema); 