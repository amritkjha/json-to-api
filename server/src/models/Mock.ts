import mongoose from "mongoose";

const MockSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        payload: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        expiresAt: {
            type: Date,
            required: true
        }
    },
    { timestamps: true }
)
MockSchema.index({expiresAt: 1}, {expireAfterSeconds: 0})
export const MockModel = mongoose.model('Mock', MockSchema);