const mongoose = require("../database");
const User = require('../models/User');

const schema = {

    from: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User,
    },
    to: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User
    },
    status: {
        type: mongoose.SchemaTypes.String,
        default: "pending",
        enum : ['pending', 'rejected', 'accepted']
    }

};
const collectionName = "friends";
const postSchema = mongoose.Schema(schema);
const Friends = mongoose.model(collectionName, postSchema);
module.exports = Friends;


