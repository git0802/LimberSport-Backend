import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { _mails } from 'src/_mock/_mail';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { mailId } = req.query;

    const mail = _mails.find((mail) => mail.id === mailId);

    if (!mail) {
      res.status(404).json({
        message: 'Mail Not Found!',
      });
      return;
    }

    res.status(200).json({
      mail,
    });
  } catch (error) {
    console.error('[Mail API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
