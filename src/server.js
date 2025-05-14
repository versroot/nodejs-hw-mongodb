import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRouter from './routes/contactsRouter.js';

function setupServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(pino({ transport: { target: 'pino-pretty' } }));
  app.use(cors());
  app.use(express.json());

  app.use('/contacts', contactsRouter);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default setupServer;
