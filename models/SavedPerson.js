const mongoose = require('mongoose');

const schema = mongoose.Schema;


const SavedPersonSchema = new schema({
      name : {
          type  : String ,
          required : true,
      }
      ,
      gender : {
          type : String,
          required : true
      }
      , 
      saver : {
          type : schema.Types.ObjectId,
          ref : 'SuperHero',
      }
});

const SavedPerson = mongoose.model('SavedPerson' , SavedPersonSchema);

module.exports = SavedPerson;