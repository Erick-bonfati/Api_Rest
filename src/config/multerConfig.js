import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPEG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images')); // aqui estamos pegando o destino do arquivo com dirname
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`); // aqui pegamos um nome de arquivo de acordo com os
      // milissegundos e também com base no nome original do arquivo enviado pelo usuario, em resumo, vamos ter uma foto que tem
      // como nome a data atual, mais a extensão original do arquivo, e também evitamos de mandarem uma foto no exato mesmo milissegundo
    },
  }),
};
