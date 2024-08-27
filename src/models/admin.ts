import { Schema, model, models } from "mongoose"
import bcryptjs from "bcryptjs"
import type { IAdmin } from "@/types/main"

const adminSchema = new Schema<IAdmin>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

adminSchema.methods.comparePassword = async function (passwordForm: string) {
  return await bcryptjs.compare(passwordForm, this.password)
}

const Admin = models.Admin ?? model("Admin", adminSchema)
export default Admin
