// import { NextFunction, Request, Response } from "express";
// import * as multer from "multer";

// export const upload = (fieldname: string) => {
//   console.log("fieldname", fieldname);

//   const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, "./uploads/");
//     },
//     filename: function (req, file, callback) {
//       const suffix = Date.now();
//       callback(null, file.fieldname + "_" + suffix + ".png");
//     },
//   });
//   const uploadFile = multer({ storage: storage });
//   console.log("=====================1");

//   return (req: Request, res: Response, next: NextFunction) => {
//     uploadFile.single(fieldname)(req, res, function (err: any) {
//       if (err) {
//         return res.status(400).json({ error: "File upload failed." });
//       }
//       console.log("=====================2");
//       res.locals.filename = req.file.filename;

//       console.log(
//         "fileUpload mdlware res.locals.filename:",
//         res.locals.filename
//       );
//       console.log("=====================3");
//       next();
//     });
//   };
// };

import { NextFunction, Request, Response } from 'express';
import * as multer from 'multer';

export const upload = (image: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + '-' + uniqueSuffix + '.png');
    },
  });

  const uploadFile = multer({ storage: storage });

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(image)(req, res, function (err: any) {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: 'file upload failed.' });
      }
      if (!req.file) {
        return next();
      }
      res.locals.filename = req.file.filename;
      next();
    });
  };
};
