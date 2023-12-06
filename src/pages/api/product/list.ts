import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { _products } from 'src/_mock/_product';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    res.status(200).json({
      products: _products,
    });
  } catch (error) {
    console.error('[Product API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
