import { Request, Response } from 'express';
import { uploadToS3 } from '../service/s3service';

export const uploadFileController = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileUrl = await uploadToS3(req.file);
    res.status(200).json({ message: 'Upload successful', fileUrl });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};
