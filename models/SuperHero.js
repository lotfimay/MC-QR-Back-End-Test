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
            message : "Enter a fucking integer bitch"
        }
    }
    ,
    speed : {
        type : Number ,
        required : true,
        validate : {
            validator : Number.isInteger,
            message : "Enter a fucking integer bitch"
        }
    }
    ,
    intelligence : {
        type : Number ,
        required : true,
        validate : {
            validator : Number.isInteger,
            message : "Enter a fucking integer bitch"
        }
    }
}); 

const SuperHero = mongoose.model('SuperHero' , superHeroSchema);

module.exports = SuperHero;
