import { Router } from 'express';
import { uploadFileController } from "../controller/uploadcontroller"
import { multerMiddleware } from "../middleware/multer.middleware"

const router = Router();

router.post('/upload', multerMiddleware.single('file'), uploadFileController as (req: any, res: any) => Promise<void>);

export default router;
