import { Request, Response } from 'express';

export const indexController = (req: Request, res: Response) => {
  const data = [
    { id: 1, name: 'Mock Item 1' },
    { id: 2, name: 'Mock Item 2' }
    // Add more mock items as needed
  ];
  res.json(data);
};
