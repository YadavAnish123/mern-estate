import express from 'express';
import { likeProperty, dislikeProperty, messageProperty, getALLProperty,addProperty } from '../controller/properties.controller.js';

const router = express.Router();

// Define property routes
router.post('/addProperty',addProperty)
router.post('/:id/like', likeProperty);
router.post('/:id/dislike', dislikeProperty);
router.post('/:id/message', messageProperty);
router.get('/getALLProperty', getALLProperty);

export default router;
