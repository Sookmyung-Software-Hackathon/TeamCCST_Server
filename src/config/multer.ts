import multer from 'multer';
import multerS3 from 'multer-s3';
import keys from './keys';
import s3 from './s3Config';
import { Request } from 'express';

type FileNameCallback = (error: Error | null, filename: string) => void;

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: keys.BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: function (
      req: Request,
      file: Express.MulterS3.File,
      cb: FileNameCallback
    ) {
      cb(null, `${Date.now()}_${file.originalname}`);
    }
  })
});

export default upload;
