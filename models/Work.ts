
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWork extends Document {
  title: string;
  description?: string;
  images: string[];
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

const WorkSchema = new Schema<IWork>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    images: {
      type: [String],
      required: true,
      default: [],
    },

    category: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Work: Model<IWork> =
  mongoose.models.Work ||
  mongoose.model<IWork>("Work", WorkSchema);

export default Work;

