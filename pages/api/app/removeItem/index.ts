import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]';

import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);

import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.send({
      content: 'You need to be signed in to access this content.',
    });
  }

  const { uuid } = session;

  console.log({ uuid });

  // remove item from Items table
  const { error: itemError } = await supabase
    .from('items')
    .delete()
    .eq('owner', uuid)
    .eq('id', req.body.id);

  res.send({
    content: 'Item removed successfully.',
  });
};

export default handler;
