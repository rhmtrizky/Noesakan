import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Thread } from "../entities/Thread";
import { Console } from "console";
import { User } from "../entities/User";
import { v2 as cloudinary } from "cloudinary";
class ThreadService {
  private readonly threadRepository: Repository<Thread> =
    AppDataSource.getRepository(Thread);

  async find(reqQuery?: any, loginSession?: any) {
    try {
      const threads = await this.threadRepository.find({
        relations: ["users", "replies"],
        take: 10,
        order: {
          id: "DESC",
        },
      });
      return threads.map((element) => ({
        id: element.id,
        content: element.content,
        image: element.image,
        createdAt: element.createdAt,
        user: element.users,
        repliesCount: element.replies.length,
        // likesCount: element.likes.length,
        // isLiked: element.likes.some((like:any) => like.user.is === loginSession.id),
      }));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findOne(id: number, loginSession?: any): Promise<any> {
    try {
      const thread = await this.threadRepository.findOne({
        where: {
          id: id,
        },

        relations: ["users", "replies"],
      });
      return {
        id: thread.id,
        content: thread.content,
        image: thread.image,
        createdAt: thread.createdAt,
        user: thread.users,
        // repliesCount: thread.replies.length,
        // likesCount: thread.likes.length,
        // isLiked: thread.likes.some((like: any) => like.user.id === loginSession.user.id)
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async create(req: Request, res: Response) {
    const { content } = req.body;
    const loginSession = res.locals.loginSession;
    console.log("LOGIN SESI NIH BOS", loginSession);

    // console.log("USERLOGIN NIH",loginSession)

    try {
      const filename = res.locals.filename;
      console.log("filenameSErVICE:", filename);
      const data = this.threadRepository.create({
        content: content,
        image: filename,
        users: loginSession,
      });
      console.log("ini data boss", data);

      const cloudinaryID = cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });

      const cloudinaryResponse = await cloudinary.uploader.upload(
        "./src/uploads/" + filename
      );

      console.log("cloudinary apaan nih service:", cloudinaryResponse);

      const thread = this.threadRepository.create({
        content: data.content,
        image: cloudinaryResponse.secure_url,
        users: data.users,
      });

      const createdThread = await this.threadRepository.save(thread);

      return res.status(200).json(createdThread);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const loginSession = res.locals.loginSession;

    try {
      const deletedThread = await this.threadRepository.delete(id);
      return res.status(200).json(deletedThread);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const threadz = await this.threadRepository.findOne({
      where: {
        id: id,
      },
    });
    const data = req.body;

    if (data.content != "") {
      threadz.content = data.content;
    }

    if (data.content != "") {
      threadz.image = data.image;
    }

    // console.log(threadz.content , threadz.image)

    const updatedThread = this.threadRepository.save(threadz);

    return res.status(200).json(updatedThread);
  }
}

export default new ThreadService();
