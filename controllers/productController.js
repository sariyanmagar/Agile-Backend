const Product=require('../models/productModel');
const fileUpload = require('../middleware/fileUpload')

//.........................INSERT PRODUCT.........................................................................
exports.add_product=(req,res)=>{
    console.log(req)

    const productname=req.body.productname;
    const platform=req.body.platform;
    const price=req.body.price;
    const publisher=req.body.publisher;
    //const path=req.file.path;
    const genre=req.body.genre;
    const release_date=req.body.release_date;
    const system_requirements=req.body.system_requirements;
    const instock=req.body.instock;
    const description=req.body.description;

    const productData= new Product({
        productname:productname,
        platform:platform,
        price:price,
        publisher:publisher,
        //image:"/images/" + req.file.filename,
        genre:genre,
        release_date:release_date,
        system_requirements:system_requirements,
        instock:instock,
        description:description,
    })
    productData.save()
    .then(function(success){
        res.status(200).json({message:"Product Added Successfully!!"})
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })
}

//.....................................................UPDATE PRODUCT.................................................
exports.update_product=(req,res)=>{
    const productname=req.body.productname;
    const platform=req.body.platform;
    const price=req.body.price;
    const publisher=req.body.publisher;
    const genre=req.body.genre;
    const release_date=req.body.release_date;
    const system_requirements=req.body.system_requirements;
    const instock=req.body.instock;
    const description=req.body.description;
    const pid=req.params.id;
    Product.updateOne({_id:pid},{
        productname:productname,
        platform:platform,
        price:price,
        publisher:publisher,
        genre:genre,
        release_date:release_date,
        system_requirements:system_requirements,
        instock:instock,
        description:description
    })
    .then(function(success){
        res.status(200).json({message:"Updated Successfully!!"})
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })
}

//.....................................DELETE PRODUCT................................................................
exports.delete_product=(req,res)=>{
    const productId= req.params.id;
    Product.deleteOne({_id:productId})
    .then(function(success){
        res.status(200).json({message:"Deleted!!"})
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })
}

//........................................GET ALL PRODUCTS.............................................................
exports.get_all_products=(req,res)=>{
    Product.find()
    .then(function(productdata){
        res.send(productdata);
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })
}

//......................................GET SINGLE PRODUCT..........................................................

exports.get_single_product=(req,res)=>{
    const productId=req.params.id;
    Product.findOne({_id:productId})
    .then(function(productData){
        res.status(200).json(productData)
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })  
}


