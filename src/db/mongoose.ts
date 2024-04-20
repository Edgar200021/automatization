import mongoose from 'mongoose'

export const connectDb = async () => {
  try {
    console.log(process.env.DB_URI)

    await mongoose.connect(process.env.DB_URI!)
  } catch (e) {
    console.log(e)
  }
}
