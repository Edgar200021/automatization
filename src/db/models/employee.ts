import mongoose, { InferSchemaType } from 'mongoose'
const { Schema } = mongoose

const employeeSchema = new Schema({
  fullName: { type: String, required: [true, 'Full name is required'] },
  position: { type: String, required: [true, 'Position is required'] },
  department: { type: String, required: [true, 'Department is required'] },
  email: { type: String, required: [true, 'Email is required'] },
  dailySalary: { type: Number, required: [true, 'Salary is required'] },
  monthlyEarnings: {
    type: Number,
    required: [true, 'Working days is required'],
    default: 0,
  },
  workingDaysPerMonth: {
    type: Number,
    required: [true, 'Working days is required'],
    default: 0,
  },
  balance: {
    type: Number,
    required: [true, 'balance  is required'],
    default: 0,
  },
  company: { type: Schema.Types.ObjectId, ref: 'company', required: [true] },
  updatedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
})

export type TEmploye = InferSchemaType<typeof employeeSchema>

export const Employee =
  mongoose.models?.Employee ||
  mongoose.model<TEmploye>('Employee', employeeSchema)
