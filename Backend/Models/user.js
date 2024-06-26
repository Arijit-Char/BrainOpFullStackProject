import mongoose from "mongoose";
const schema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
        unique: true,
    },

});
export const User = mongoose.model("User", schema);