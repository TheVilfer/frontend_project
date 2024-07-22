import { GetStaticPropsContext } from 'next';
import { Post } from '@/types/items';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

type Props = {
  post: Post | null;
};

export default function Item({ post }: Props) {
  const router = useRouter();
  async function handleDelete() {
    const response = await fetch('/api/app/removeItem', {
      method: 'POST',
      body: JSON.stringify({ id: post?.id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      router.push('/app/wardrobe');
    }
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {post.name}
        </h1>
        <p className="text-lg text-gray-700 mb-4">Type: {post.type}</p>
        <Button className="mt-1 mb-4" onClick={handleDelete}>
          Delete item
        </Button>
        <div className="relative w-full h-0 pb-[56.25%] mb-4">
          {' '}
          {/* Aspect ratio 16:9 */}
          <Image
            src={post.img || ''}
            alt={post.name}
            className="object-contain rounded-lg"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { id } = params as { id: string };
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/app/getItem`,
  );
  const data = await resp.json();
  const tempDB: Post[] | undefined = data.items;
  const post: Post | undefined = tempDB?.find((item) => item.id === id);
  if (!post) {
    return { props: { post: null } };
  }
  return { props: { post } };
}

export async function getStaticPaths() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/app/getItem`,
  );
  const data = await resp.json();
  const tempDB: Post[] | undefined = data.items;
  const paths = tempDB?.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: false };
}
