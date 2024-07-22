import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AppUser() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="py-12">
        <section
          id="profile"
          className="bg-white py-16 shadow-lg rounded-lg mx-4 sm:mx-6 lg:mx-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Your Profile
            </h2>
            <div className="mt-4 text-lg text-gray-600">
              <p>Hello, {session?.user?.name}</p>
              <p>You are logged in as {session?.user?.email}</p>
            </div>
          </div>
        </section>

        <div className=" mt-5 flex flex-col md:flex-row md:gap-3 lg:gap-8">
          <section
            id="wardrobe"
            className="py-16 bg-indigo-50 shadow-lg rounded-lg mx-4 sm:mx-6 lg:mx-8 mt-8 md:mt-0 flex-1"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Your Wardrobe
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                View and manage your wardrobe items.
              </p>
              <Link
                href="/app/wardrobe"
                className="mt-8 inline-block bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700"
              >
                View Wardrobe
              </Link>
            </div>
          </section>

          <section
            id="add-item"
            className="py-16 bg-white shadow-lg rounded-lg mx-4 sm:mx-6 lg:mx-8 mt-8 md:mt-0 flex-1"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Add New Item
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Add new items to your wardrobe easily.
              </p>
              <Link
                href="/app/add"
                className="mt-8 inline-block bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700"
              >
                Add Item
              </Link>
            </div>
          </section>

          <section
            id="generate-outfit"
            className="py-16 bg-indigo-50 shadow-lg rounded-lg mx-4 sm:mx-6 lg:mx-8 mt-8 md:mt-0 flex-1"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Generate New Outfit
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get AI-generated outfit suggestions based on your wardrobe.
              </p>
              <Link
                href="/app/generate"
                className="mt-8 inline-block bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700"
              >
                Generate Outfit
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
