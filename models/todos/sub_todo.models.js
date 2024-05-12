import mongoose from 'mongoose';

const subTodosSchema = new mongoose.Schema(
  {
    contain: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodos = mongoose.Schema('SubTodos', subTodosSchema);
