import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import type { Post, WardropeGeneration } from '@/types/items';
import Head from 'next/head';

const GenerateOutfit: React.FC = () => {
  const { data: session, status } = useSession();
  const [outfit, setOutfit] = useState<WardropeGeneration | null>(null);
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState('');
  const [wardrobe, setWardrobe] = useState<Post[]>([]);

  const generateOutfit = async () => {
    setLoading(true);

    const imgHolder: { [key: string]: string } = {};

    // Simulate an API call to generate an outfit based on the entered destination
    const lightWardrobe = wardrobe.map((item: Post) => {
      const newItem = { ...item };
      imgHolder[newItem.id] = newItem.img || '';
      delete newItem.img;
      return newItem;
    });

    const resp = await fetch('/api/app/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ destination, data: lightWardrobe }),
    });
    const data = await resp.json();

    let outfit = JSON.parse(data.response.kwargs.content).outfit as WardropeGeneration;

    // Find the corresponding items in the wardrobe and set the full outfit
    outfit?.dress && (outfit.dress.img = imgHolder[outfit.dress.id]);
    outfit?.top && (outfit.top.img = imgHolder[outfit.top.id]);
    outfit?.bottom && (outfit.bottom.img = imgHolder[outfit.bottom.id]);
    outfit?.shoes && (outfit.shoes.img = imgHolder[outfit.shoes.id]);

    console.log(outfit);

    setOutfit(outfit);
    setLoading(false);
  };

  useEffect(() => {
    const fetchWardrobe = async () => {
      const resp = await fetch('/api/app/getItem', {
        method: 'POST',
      });

      const data = await resp.json();
      const items = data.items as WardropeGeneration;

      console.log(data.items);

      setWardrobe(data.items);
    };
    fetchWardrobe();
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>Please sign in to generate an outfit.</div>;
  }

  if (wardrobe && wardrobe.length === 0) {
    return (
      <div>
        <p>
          You don&apos;t have any items in your wardrobe. Please add some items
          to generate an outfit.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <Head>
        <title>Generate Outfit - Quantum Hedgehogs</title>
        <meta name="description" content="Generate a new outfit" />
      </Head>
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Generate New Outfit
        </h1>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Enter your destination and click the button below to generate an
            amazing outfit using AI based on your wardrobe.
          </p>
          <div className="mb-4">
            <label
              htmlFor="destination"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Enter Destination
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              placeholder="e.g., Casual, Formal, Sport"
            />
          </div>
          <button
            onClick={generateOutfit}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Outfit'}
          </button>
        </div>
        {outfit && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {outfit.dress ? (
              <div className="flex flex-col items-center">
                <Image
                  src={outfit.dress.img || ''}
                  alt="Dress"
                  width={200}
                  height={200}
                  className="object-contain rounded-lg w-60 h-60"
                />
                <p className="mt-2 text-lg text-gray-700">Dress</p>
              </div>
            ) : (
              <>
                {outfit.top && outfit.top.name && (
                  <div className="flex flex-col items-center">
                    <Image
                      src={outfit.top.img || ''}
                      alt="Top"
                      width={200}
                      height={200}
                      className="object-contain rounded-lg w-60 h-60"
                    />
                    <p className="mt-2 text-lg text-gray-700">Top</p>
                  </div>
                )}
                {outfit.bottom && outfit.bottom.name && (
                  <div className="flex flex-col items-center">
                    <Image
                      src={outfit.bottom.img || ''}
                      alt="Bottom"
                      width={200}
                      height={200}
                      className="object-contain rounded-lg w-60 h-60"
                    />
                    <p className="mt-2 text-lg text-gray-700">Bottom</p>
                  </div>
                )}
              </>
            )}
            {outfit.shoes && outfit.shoes.name && (
              <div className="flex flex-col items-center">
                <Image
                  src={outfit.shoes.img || ''}
                  alt="Shoes"
                  width={200}
                  height={200}
                  className="object-contain rounded-lg w-60 h-60"
                />
                <p className="mt-2 text-lg text-gray-700">Shoes</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateOutfit;
