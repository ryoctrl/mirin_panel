// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { ILoginPayload } from "stores/users";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as ILoginPayload;
  res.statusCode = 200;
  res.json({ userName: body.userName });
};
