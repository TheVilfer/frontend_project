import { Post } from '@/types/items';
import { GetStaticPropsContext } from 'next';
import typeClother from '@/utils/type.json';

import Link from 'next/link';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  posts: Post[] | null;
};

export default function Items({ posts }: Props) {
  const [itemElements, _] = useState(posts || []);
  const [filterType, setFilterType] = useState('all');

  if (!posts) {
    return <div>Items not found</div>;
  }

  const filterPosts = (type: string) => {
    if (type === 'all') {
      return posts;
    }

    return posts.filter((post) => post.type === type);
  };

  if (posts.length === 0) {
    return <div>No items found</div>;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Clothes</h1>
      <Button className="mb-6">
        <Link href="/app/add">Add new item</Link>
      </Button>
      {/* filters */}
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <label htmlFor="type" className="text-lg font-medium text-gray-700">
            Type:
          </label>
          <select
            name="type"
            id="type"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
          >
            {typeClother.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterPosts(filterType).map((post) => (
          <Link key={post.id} href={`/app/wardrobe/${post.id}`}>
            <div className="p-4 bg-white shadow-md flex flex-col gap-3 rounded-lg transition-transform transform hover:scale-105">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.name}
                </h2>
              </div>
              <div className="relative">
                <Image
                  src={post.img || ''}
                  alt={post.name}
                  className="object-contain w-64 h-64 rounded-lg"
                  width={512}
                  height={512}
                />
              </div>
              <div>
                <span className="inline-block rounded-full bg-red-700 px-3 py-1 text-white text-sm">
                  {post.type}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const resp = await fetch('http://localhost:3000/api/app/getItem');
  const data = await resp.json();
  const posts: Post[] | undefined = data.items;
  if (!posts) {
    return { props: { posts: null } };
  }

  return { props: { posts } };
}
