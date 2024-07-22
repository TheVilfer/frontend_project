import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Quantum Hedgehogs</h1>
        </Link>

        <div className="flex items-center">
          {session ? (
            <nav className="hidden md:flex space-x-4">
              <Link href="/app/wardrope">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Wardrope
                </span>
              </Link>
              <Link href="/app/add">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Add item
                </span>
              </Link>
              <Link href="/app/generate">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Generate outfit
                </span>
              </Link>
            </nav>
          ) : (
            <nav className="hidden md:flex space-x-4">
              <Link href="/#features">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Features
                </span>
              </Link>
              <Link href="/#how-it-works">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  How It Works
                </span>
              </Link>
              <Link href="/#pricing">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Pricing
                </span>
              </Link>
              <Link href="/#testimonials">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Testimonials
                </span>
              </Link>
              <Link href="/#faq">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  FAQ
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  About us
                </span>
              </Link>
            </nav>
          )}

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
          <UserAuth />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {session ? (
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link href="/app/wardrope">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Wardrope
                </span>
              </Link>
              <Link href="/app/add">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Add item
                </span>
              </Link>
              <Link href="/app/generate">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Generate outfit
                </span>
              </Link>
            </nav>
          ) : (
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link href="/#features">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Features
                </span>
              </Link>
              <Link href="/#how-it-works">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  How It Works
                </span>
              </Link>
              <Link href="/#pricing">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Pricing
                </span>
              </Link>
              <Link href="/#testimonials">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  Testimonials
                </span>
              </Link>
              <Link href="/#faq">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  FAQ
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-600 hover:text-gray-800 mx-2">
                  About us
                </span>
              </Link>
            </nav>
          )}
        </div>
      )}
    </header>
  );
};

function UserAuth() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="ml-5 flex items-center">
        <Link href="/api/auth/signout">
          <span className="text-gray-600 hover:text-gray-800 mx-2">
            Sign Out
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="ml-5 flex items-center">
      <Link href="/api/auth/signin">
        <span className="text-gray-600 hover:text-gray-800 mx-2">Sign In</span>
      </Link>
    </div>
  );
}

export default Header;
