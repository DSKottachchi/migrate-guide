import mongoose from 'mongoose';

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
  email: {
    type: String,
    required: [true, "Please enter a password"],
  },
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
