import mongoose, { InferSchemaType } from 'mongoose'
const { Schema } = mongoose

const employeeSchema = new Schema(
  {
    fullName: { type: String, required: [true, 'Full name is required'] },
    position: { type: String, required: [true, 'Position is required'] },
    department: { type: String, required: [true, 'Department is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    salary: { type: Number, required: [true, 'Salary is required'] },
    company: { type: Schema.Types.ObjectId, ref: 'company', required: [true] },
  },
  { timestamps: true }
)

export type TEmploye = InferSchemaType<typeof employeeSchema>

export const Employee =
  mongoose.models?.Employee ||
  mongoose.model<TEmploye>('Employee', employeeSchema)
