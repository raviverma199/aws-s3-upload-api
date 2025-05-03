import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from '../config/s3';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { File as MulterFile } from 'multer';

export const uploadToS3 = async (file: MulterFile): Promise<string> => {


// export const uploadToS3 = async (file: Express.Multer.File): Promise<string> => {
  const fileExtension = path.extname(file.originalname);
  const uniqueKey = `${Date.now()}-${uuidv4()}${fileExtension}`;

  const params = {
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: uniqueKey,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read', // or 'private' for secure access
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);

  return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${uniqueKey}`;
};
