import { Request, Response } from "express";
import { User } from '../models/models';
import { IUser } from "../types/types";
import bcrypt from 'bcrypt';

export const sigin = async(req:Request, res:Response) => {
    try {
        const {name,email,password} = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User with this email already exists' });
        }
        const saltRounds = 10; // Adjust saltRounds as needed
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser: IUser = new User({
            name,
            email,
            password: hashedPassword,
          });
        

    } catch (error) {
        console.error(error);
        res.sendStatus(500).json({message:"server Error"})
    }
}