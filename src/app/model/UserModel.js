
const mongoose = require("mongoose");

// User Schema and connect DB collection
const usersRegSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
        validate: {
            validator: (value) => {
                const emailRegex = /@/
                return emailRegex.test(value);
            },
            message: (props) => `${props.value} is not a valid email address!`,
        },
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    password: {
        required: true,
        type: String
    }
},
{
    timestamps: true
})

const UserModel = mongoose.model("users", usersRegSchema);

module.exports = UserModel;