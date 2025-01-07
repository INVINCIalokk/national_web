import { Document } from "mongoose";

export interface ICourse {
  _id: string;
  name: string;
  description: string;
  chapters: IChapter[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IChapter {
  _id: string;
  name: string;
  courseId: string; // Reference to the parent course
  lessons: ILesson[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ILesson {
  _id: string;
  name: string;
  chapterId: string; // Reference to the parent chapter
  videoUrl: string; // URL of the video lecture
  pdfUrl: string; // URL of the PDF lecture notes
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends Document {
  _id: string;
  name: string;
  password: string;
  email: string;
  role: "admin" | "student";
  createdAt: Date;
  updatedAt: Date;
}
