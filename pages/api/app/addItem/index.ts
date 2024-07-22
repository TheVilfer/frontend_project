import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]';
import { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '@/types/items';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(403).send({
      content: 'You need to be signed in to access this content.',
    });
  }

  const { uuid } = session;
  const { name, type, img } = req.body as Post;

  console.log({ name, type, img, uuid });

  // add uuid to Users table, if it doesn't exist
  const { data: users } = await supabase
    .from('Users')
    .select('*')
    .eq('id', uuid);

  if (users && users.length === 0) {
    const { error } = await supabase.from('Users').insert([{ id: uuid }]);

    if (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // add item to Items table
  const { error: itemError } = await supabase
    .from('items')
    .insert([{ name, type, img, owner: uuid }]);

  res.send({
    content: 'Item added successfully.',
  });
};

export default handler;
