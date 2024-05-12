import mongoose from 'Mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      requre: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      unique: [true, 'password is required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
