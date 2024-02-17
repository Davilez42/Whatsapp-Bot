import { Schema, model, ObjectId } from "mongoose";

const userSchema = new Schema({
    phone_number: String,
    first_name: String,
    email: String,
    index_register: Number,
    is_register: { type: Boolean, default: false },
    messages: [{ role: String, id: String, type_: String, message: String }],
    bots: [{
        id_bot: { type: ObjectId, ref: 'bots' }
    }]

}, { timestamps: true })

const userModel = model('users', userSchema, 'wh_users')
export default userModel