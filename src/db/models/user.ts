import mongoose, { InferSchemaType } from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
  email: String,
  password: String,
})

export const User =
  mongoose.models?.User ||
  mongoose.model<InferSchemaType<typeof userSchema>>('User', userSchema)
