const mongoose = require("../database");
const schema = {
    name: { type: mongoose.SchemaTypes.String, required: true, allow: false },
    sureName: { type: mongoose.SchemaTypes.String, required: true, allow: false },
    email: { type: mongoose.SchemaTypes.String, required: true, allow: false },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
        select: false,
        allow: false
    },
    age: {type: mongoose.SchemaTypes.String, required: true, allow: false},
    gender: {type: mongoose.SchemaTypes.String, required: true, allow: false},
    img:{type:mongoose.SchemaTypes.String, required: true, allow: false},
    postIds: [{ type: mongoose.SchemaTypes.ObjectId, ref: "post" }],
    request: [{
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'friends'},
        username: {type: String, default: ''}
    }],
    friendsList: [{
        friendId: {type: mongoose.Schema.Types.ObjectId, ref: 'friends'},
        friendName: {type: String, default: ''}
    }],
    totalRequest: {type: Number, default:0}
};
const collectionName = "user"; // Name of the collection of documents
const userSchema = mongoose.Schema(schema);
userSchema.virtual('posts', {
    ref: "post",
    localField: "postIds",
    foreignField: '_id',
    justOne: false,
});

userSchema.virtual('friend', {
    ref: "friends",
    localField: "friends",
    foreignField: '_id',
    justOne: false,
});
const User = mongoose.model(collectionName, userSchema);
User.find().populate('posts').lean().then(users => {
    // console.log(users)
});
User.find().populate('friends').lean().then(friends => {
    console.log(friends)
});
module.exports = User;