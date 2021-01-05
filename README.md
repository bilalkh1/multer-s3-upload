# Node js Express Multer S3 AWS Image Upload
Upload Images using Nodejs Express AWS and Multer S3.
# Setup Environment Variables
```
aws.config.update({
  secretAccessKey: '',
  accessKeyId: '',
  region: ''
})
```
You should change the SECRET_ACCESS_KEY and ACCESS_KEY_ID and REGION in /src/services/image-upload.js file.
# References
## AWS DOCS
* [AWS S3 DOCS](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)
## Multer S3 Docs
* [Multer S3 DOCS NPM](https://www.npmjs.com/package/multer-s3)
