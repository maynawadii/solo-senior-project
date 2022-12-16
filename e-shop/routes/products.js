const express = require('express'); 
const router = express.Router(); 

// Importing User Schema 
const Product = require('../models/products'); 




// product adding api 
router.post('/add', (req, res, next) => { 
// Creating empty user object 
    let newProduct = new Product(); 

    // Initialize newUser object with request data 
    newProduct.name = req.body.name, 

    newProduct.description = req.body.description,
    
    newProduct.image = req.body.image,

    newProduct.price = req.body.price,

    newProduct.colors = req.body.colors ,

    newProduct.categorie = req.body.categorie,
              

    // Save newProduct object to database 
    newProduct.save((err, product) => { 
        if (err) { 
            return res.status(400).send({ 
                message : "Failed to add product."
            }); 
        } 
        else { 
            return res.status(201).send({ 
                message : "Product added successfully."
            }); 
        } 
    }); 
}); 



// Export module to allow it to be imported in other files 
module.exports = router;