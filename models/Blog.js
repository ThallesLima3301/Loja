const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const blogSchema = new Schema({
    //posso mudar para oq quiser ex clientes usuarios 
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Blog", blogSchema);