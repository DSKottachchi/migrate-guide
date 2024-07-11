import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"]
  },
  email: {
    type: String,
    required: [true, "Please enter a email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
