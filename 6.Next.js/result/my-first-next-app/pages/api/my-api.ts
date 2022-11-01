import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    res.status(200).json({ message: body.name });
  } else {
    res.status(500).json({ message: `${req.method}はハンドルされません。` });
  }
};

export default handler;
