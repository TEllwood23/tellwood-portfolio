import { Request, Response } from 'express';

export const indexController = (req: Request, res: Response) => {
  res.json({ message: 'Hello from the Express server!' });
};
