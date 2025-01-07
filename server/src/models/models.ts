import mongoose from 'mongoose';
import { ICourse, IChapter, ILesson, IUser } from '../types/types'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,

  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    required: true,
    default: "user",
  },
}, { timestamps: true });

const lessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  chapterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter', // Reference to the Chapter model
    required: true,
  },
  videoUrl: {
    type: String,
  },
  pdfUrl: {
    type: String,
  },
}, { timestamps: true });

const chapterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Reference to the Course model
    required: true,
  },
  lessons: [lessonSchema], // Array of lessons within the chapter
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  chapters: [chapterSchema], // Array of chapters within the course
}, { timestamps: true });

export const User = mongoose.model<IUser>('User', userSchema);
export const Course = mongoose.model<ICourse>('Course', courseSchema);
export const Chapter = mongoose.model<IChapter>('Chapter', chapterSchema);
export const Lesson = mongoose.model<ILesson>('Lesson', lessonSchema);