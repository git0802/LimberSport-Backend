import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { _labels } from 'src/_mock/_mail';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    res.status(200).json({
      labels: _labels,
    });
  } catch (error) {
    console.error('[Mail API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
