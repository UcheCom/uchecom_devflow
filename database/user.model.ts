import { model, Schema, models, Types } from 'mongoose';

export interface IUser {
    _id: Types.ObjectId;
    name: string;
    username: string;
    email: string;
    bio?: string;
    image: string;
    location?: string;
    portfolio?: string;
    reputation?: number;
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String, required: true},
    location: { type: String},
    portfolio: { type: String},
    reputaton: { type: Number, default: 0},
}, 
{ timestamps: true }
);

const User = models?.User || model<IUser>('User', userSchema);

export default User;
