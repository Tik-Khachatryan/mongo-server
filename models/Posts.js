const mongoose = require("../database");
const schema = {
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' },
    title: { type: String },

};
const collectionName = "post";
const postSchema = mongoose.Schema(schema);
const Posts = mongoose.model(collectionName, postSchema);
module.exports = Posts;


