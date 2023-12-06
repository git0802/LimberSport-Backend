import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { _products } from 'src/_mock/_product';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { query } = req.query;

    const cleanQuery = `${query}`.toLowerCase().trim();

    const results: typeof _products = [];

    _products.forEach((product) => {
      if (!query) {
        return results.push(product);
      }

      if (product.name.toLowerCase().includes(cleanQuery)) {
        return results.push(product);
      }

      return results;
    });

    res.status(200).json({
      results,
    });
  } catch (error) {
    console.error('[Product API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
