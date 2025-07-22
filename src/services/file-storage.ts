import s3 from '@/lib/s3';
import {
  DeleteObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

class FileStorage {
  storage: S3Client;

  constructor() {
    this.storage = s3;
  }

  async uploadFile(file: File, filepath: string) {
    if (!file) return { error: 'No file provided' };

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: filepath,
      Body: buffer,
      ContentType: file.type,
    };

    await this.storage.send(new PutObjectCommand(uploadParams));

    const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filepath}`;

    return { url: fileUrl, src: filepath };
  }

  async deleteFile(fileKey: string) {
    try {
      const command = new DeleteObjectCommand({
        Bucket: 'linkdeckbucket', // Your S3 bucket name
        Key: fileKey, // The file's key (path in S3)
      });

      await this.storage.send(command);

      console.log(`File deleted: ${fileKey}`);
      return { success: true };
    } catch (error) {
      console.error('Error deleting AWS file:', error);
      return { success: false, error };
    }
  }

  async fetchFile(prefix = '') {
    try {
      const command = new ListObjectsV2Command({
        Bucket: 'linkdeckbucket',
        Prefix: prefix,
      });

      const response = await this.storage.send(command);

      if (!response.Contents) return [];

      return response.Contents.map((file) => ({
        id: file.Key, // Unique file key (path in S3)
        name: file?.Key?.split('/').pop(), // Extract filename
        url: `https://linkdeckbucket.s3.amazonaws.com/${file.Key}`, // Public URL
        size: file.Size,
        type: file?.Key?.endsWith('.jpg')
          ? 'image/jpeg'
          : 'application/octet-stream',
        status: 'uploaded',
      }));
    } catch (error) {
      console.error('Error fetching AWS files:', error);
      return [];
    }
  }
}

const fileStorage = new FileStorage();

export default fileStorage;
