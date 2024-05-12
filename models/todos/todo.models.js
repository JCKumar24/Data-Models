import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    contain: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      defailt: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodos',
      },
    ], //Array of SubTodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
