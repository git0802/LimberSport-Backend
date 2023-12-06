import { sign } from 'jsonwebtoken';

import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { _users, JWT_SECRET, JWT_EXPIRES_IN } from 'src/_mock/_auth';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { email, password } = req.body;

    const user = _users.find((user) => user.email === email);

    if (!user) {
      res.status(400).json({
        message: 'There is no user corresponding to the email address.',
      });
      return;
    }

    if (user?.password !== password) {
      res.status(400).json({
        message: 'Wrong password',
      });
      return;
    }

    const accessToken = sign({ userId: user?.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({
      accessToken,
      user,
    });
  } catch (error) {
    console.error('[Auth API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
