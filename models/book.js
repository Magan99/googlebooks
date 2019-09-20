const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, 
   
          },
  author: { type: String, 
 
          },
  description: { type: String, 
           
               },
  image: { type: String, 
    
         },
  link: { type: String, 
          required: true 
        },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
