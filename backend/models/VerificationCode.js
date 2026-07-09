import mongoose from 'mongoose'

const verificationCodeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      enum: ['email-verification', 'password-reset'],
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const VerificationCode = mongoose.model(
  'VerificationCode',
  verificationCodeSchema
)

export default VerificationCode