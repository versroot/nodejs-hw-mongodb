import express from 'express';
import {
  getContactsController,
  getContactByIdController,
} from '../controllers/contactsController.js';

const router = express.Router();

router.get('/', getContactsController);
router.get('/:id', getContactByIdController);

export default router;
