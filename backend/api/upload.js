/* inspired by https://appdividend.com/2022/03/03/node-express-image-upload-and-resize/ and https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/ and https://www.youtube.com/watch?v=SqbrovwhZ_o */

const multer = require('multer');
const DIR = './public/tickImages'

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `image-${Date.now()}.${ext}`)
  }
})

const upload = multer({
  storage: multerConfig,
  // limits: {
  //   fileSize: 4 * 1024 * 1024,
  // },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true)
    } else {
      cb(new Error('Only image is allowed'))
    }
  },
});

module.exports = upload;

