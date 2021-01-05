const multerS3 = require('multer-s3');
const multer = require('multer');
const aws = require('aws-sdk');

aws.config.update({
  secretAccessKey: '1vYPPIb4UdexnegVjsYSeG434oTRqTSkQgpzYnnn',
  accessKeyId: 'AKIAJC2COJV2MLI6KSDA'
})

const s3 = new aws.S3();

const upload = (folderName) => {
    return multer({
      storage: multerS3({
        s3: s3,
        bucket: 'multer-s3-image-upload',
        // Set public read permissions
        acl: 'public-read',
        // Auto detect contet type
        contentType: multerS3.AUTO_CONTENT_TYPE, 
        // Set key/ filename as original uploaded name
        key: function (req, file, cb) {
          cb(null, folderName + '/' + Date.now().toString() + file.originalname)
        }
      })
    })
  } 
  
  module.exports = upload;