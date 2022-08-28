import AWS from 'aws-sdk';
import keys from './keys';

const s3: AWS.S3 = new AWS.S3({
  accessKeyId: keys.ACCESS_KEY_ID,
  secretAccessKey: keys.SECRET_KEY,
  region: 'ap-northeast-2'
});

export default s3;
