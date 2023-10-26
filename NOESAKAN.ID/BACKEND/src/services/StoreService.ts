import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';
import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Store } from '../entities/Store';

class StoreService {
  private readonly storeRepository: Repository<Store> = AppDataSource.getRepository(Store);

  async find(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const store = await this.storeRepository.findOne({
        relations: ['users'],
        where: {
          users: {
            id: loginSession.id,
          },
        },
      });

      return res.status(200).json(store);
    } catch (err) {
      return res.status(500).json({ error: 'Error while getting threads' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const loginSession = res.locals.loginSession;

      const filename = res.locals.filename;

      let cloudinaryResponse = undefined;

      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });

      if (filename) {
        cloudinaryResponse = await cloudinary.uploader.upload('./uploads/' + filename);
      }
      console.log('cloud Res', cloudinaryResponse);

      const store = this.storeRepository.create({
        name: data.name,
        userName: data.userName,
        province: data.province,
        city: data.city,
        district: data.district,
        description: data.description,
        phoneNumber: data.phoneNumber,
        age: parseInt(data.age),
        bankAccount: data.bankAccount,
        users: {
          id: loginSession.id,
        },
        image: cloudinaryResponse.secure_url,
      });

      console.log('ini Store', store);

      const createStore = this.storeRepository.save(store);
      return res.status(200).json(createStore);
    } catch (err) {
      return res.status(500).json({ error: 'sorry there was an error', err });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      // const id = parseInt(req.params.id);
      const threads = await this.storeRepository.findOne({
        // relations: ["user", "replies", "likes"],
        where: {
          users: {
            id: loginSession.id,
          },
        },
      });

      return res.status(200).json(threads);
    } catch (err) {
      return res.status(500).json({ error: 'sorry there was an error' });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      // const loginSession = res.locals.loginSession;
      const id = parseInt(req.params.id);

      const filename = res.locals.filename;

      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });

      let cloudinaryResponse = undefined;

      if (filename) {
        cloudinaryResponse = await cloudinary.uploader.upload('./uploads/' + filename);
      }

      const store = await this.storeRepository.findOne({
        where: {
          id: id,
        },
      });
      const data = req.body;
      if (data.name !== '' && data.name !== null) {
        store.name = data.name;
      } else {
        store.name = store.name;
      }

      if (data.userName !== '' && data.userName !== null) {
        store.userName = data.userName;
      } else {
        store.userName = store.userName;
      }

      if (data.province !== '' && data.province !== null) {
        store.province = data.province;
      } else {
        store.province = store.province;
      }

      if (data.city !== '' && data.city !== null) {
        store.city = data.city;
      } else {
        store.city = store.city;
      }

      if (data.district !== '' && data.district !== null) {
        store.district = data.district;
      } else {
        store.district = store.district;
      }

      if (data.description !== '' && data.description !== null) {
        store.description = data.description;
      } else {
        store.description = store.description;
      }

      if (data.phoneNumber !== '' && data.phoneNumber !== null) {
        store.phoneNumber = data.phoneNumber;
      } else {
        store.phoneNumber = store.phoneNumber;
      }

      if (data.age !== '' && data.age !== null) {
        store.age = data.age;
      } else {
        store.age = store.age;
      }

      if (data.bankAccount !== '' && data.bankAccount !== null) {
        store.bankAccount = data.bankAccount;
      } else {
        store.bankAccount = store.bankAccount;
      }

      let updatedPictureURL = store.image;
      if (filename) {
        const cloudinaryResponse = await cloudinary.uploader.upload('./uploads/' + filename);
        updatedPictureURL = cloudinaryResponse.url;
      } else {
        store.image = store.image;
      }

      store.image = updatedPictureURL;

      const updatedStore = this.storeRepository.save(store);

      return res.status(200).json(`Store successfully updated: ${JSON.stringify(updatedStore)}`);
    } catch (err) {
      return res.status(500).json({ error: 'sorry there was an error' });
    }
  }
}

export default new StoreService();
