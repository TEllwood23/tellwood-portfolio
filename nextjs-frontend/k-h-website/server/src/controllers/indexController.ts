// k-h-website/server/src/controllers/indexController.ts
import { Request, Response } from 'express';
import pool from '../models/db';

export const getIndex = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
