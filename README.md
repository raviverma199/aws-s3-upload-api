# 🗂️ AWS S3 Upload API
AWS S3 Upload API is a secure, production-ready backend service built with Node.js, Express.js, and TypeScript to upload any type of file to Amazon S3. It supports all file formats and is ideal for integration into web or mobile apps requiring scalable and secure file storage.

### 🚀 Features

- ✅ Upload any file type (images, videos, PDFs, etc.)
- 🔐 Secure uploads using AWS IAM roles and environment variables
- 💻 Built with TypeScript for type safety and cleaner code
- 🌐 RESTful API with Express.js
- ☁️ Direct uploads to Amazon S3
- 📁 Uses Multer for multipart/form-data handling
- 🛠️ Easily configurable with a .env file

### 🧰 Tech Stack

- Node.js – JavaScript runtime
- Express.js – Web framework
- TypeScript – Static typing for improved developer experience
- AWS SDK v3 – Modern AWS API for S3 integration
- Multer – File upload middleware
- dotenv – Manage environment variables

### 📦 Installation & Setup

** 1. Clone the Repository **
git clone https://github.com/raviverma199/aws-s3-upload-api.git
cd aws-s3-upload-api

** 2. Install Dependencies **
npm install

** 3. Setup Environment Variables **
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_region
AWS_BUCKET_NAME=your_bucket_name
PORT=3000

** 4. Build & Run **
npm start

