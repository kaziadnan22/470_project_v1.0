import mongoose from "mongoose";

const rescueRequestSchema = new mongoose.Schema({
  informer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  coordinates: {
    lat: Number,
    lng: Number,
  },
  imageUrl: String,
  status: {
    type: String,
    enum: ["pending", "assigned", "rescued", "completed"],
    default: "pending",
  },
  updates: [
    {
      message: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  created: { type: Date, default: Date.now },
});

export default mongoose.model("RescueRequest", rescueRequestSchema);
