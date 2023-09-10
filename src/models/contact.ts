import { Schema, model, models } from 'mongoose'
import type { IContact } from '@/types/main'

const contactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

const Contact = models.Contact ?? model('Contact', contactSchema)
export default Contact
