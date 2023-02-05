import mongoose from 'mongoose';

const VideoShema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
      default: 0,
    },
    likes: {
      type: [String],
      required: true,
      default: 0,
    },
    disLikes: {
      type: [String],
      required: true,
      default: 0,
    },
    tags: {
      type: [String],
      default: '',
    },
  },
  { timestamps: true }
);
export default mongoose.model('Video', VideoShema);
