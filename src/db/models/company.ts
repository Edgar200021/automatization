import mongoose, { InferSchemaType, Schema } from 'mongoose'

const companySchema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: [true] },
  employees: [{ type: Schema.Types.ObjectId, ref: 'employee' }],
})

export type TCompany = InferSchemaType<typeof companySchema>
export const Company =
  mongoose.models?.Company ||
  mongoose.model<TCompany>(
    'Company',
    companySchema
  )
