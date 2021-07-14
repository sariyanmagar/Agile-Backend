const mongoose=require('mongoose');

const Product=mongoose.model('Product',{
    productname:{
        type:String,
        
    },
    platform:{
        type:String,
    },
    price:{
        type:Number,
        
    },
    publisher:{
        type:String,
    },
    image:{
        type:String
    },
    screenshots:{
        type:String,
    },
    genre:{
        type:String,
        require:true
    },
    release_date:{
        type:String,
    },
    system_requirements:{
        type:String,
    },
    instock:{
        type:String,
        enum:["Yes","No"],
        default:'Yes',
    },
    description:{
        type:String,
        require:true
    },
    trailer:{
        type:String,
    },
})
module.exports=Product;