
import multer from 'multer';

export class multerRepository {

  storage = multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null,'./public/uploads/images');
    },
    filename: (request, file, callback) => {
      callback(null,Date.now() + file.originalname)
    }
  });

  upload = multer({
    storage: this.storage,
    limits: {
      fileSize: 1024 * 1024 * 10,
    }

  })
}