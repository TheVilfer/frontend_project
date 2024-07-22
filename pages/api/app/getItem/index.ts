import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);

import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'GET') {
    const { data: items, error } = await supabase.from('items').select('*');
    res.send({
      items: items,
    });
    return;
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(403).send({
      content: 'You need to be signed in to access this content.',
    });
  }

  const { uuid } = session;

  const { data: items, error } = await supabase
    .from('items')
    .select('*')
    .eq('owner', uuid);

  res.send({
    items: items,
  });
};

export default handler;
