const mongoose = require("mongoose");

const schema = mongoose.Schema;

const superHeroSchema = new schema({
    name : {
        type : String,
        required : true
    }
    ,
    gender : {
        type : String,
        required : true
    }
    ,
    strength : {
        type : Number ,
        required : true,
        validate : {
            validator : Number.isInteger,
            message : "Enter an integer please"
        }
    }
    ,
    speed : {
        type : Number ,
        required : true,
        validate : {
            validator : Number.isInteger,
            message : "Enter an integer please"
        }
    }
    ,
    intelligence : {
        type : Number ,
        required : true,
        validate : {
            validator : Number.isInteger,
            message : "Enter an integer please"
        }
    }
}); 

const SuperHero = mongoose.model('SuperHero' , superHeroSchema);

module.exports = SuperHero;
