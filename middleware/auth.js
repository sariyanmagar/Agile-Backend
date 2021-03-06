const jwt=require('jsonwebtoken');
const User=require('../models/userModel');

module.exports.verifyUser=function(req,res,next){
    try{
        const token=req.headers.authorization.split(" ")[1];
        const data=jwt.verify(token,'anysecretkey');
        // data id is available ..
        User.findOne({_id:data.userId})
        .then(function(userData){
            req.user=userData;
            next()
        })
        .catch(function(err){
            res.status(401).json({error:err});
        })
    }
        catch(err){
            res.status(401).json({error:err})
    
        }
}

module.exports.verifyAdmin=function(req,res,next){
    try{
        const token=req.headers.authorization.split(" ")[1];
        const data= jwt.verify(token, ' anysecretkey');
        this.verifyAdmin.findOne({_id:data.userId})
        .then(function(userData){
            req.user=userData;
            next()
        })
        .catch(function(err){
            res.status(401).json({error:err});
        })
    }
    catch(err){
        res.status(401).json({error:err})
    }
}