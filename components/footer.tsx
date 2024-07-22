const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <p className="text-lg">
          Quantum Hedgehogs is dedicated to revolutionizing how you manage and
          style your wardrobe with the power of AI.
        </p>
        <p className="mt-4">
          Have questions? Reach out to us at{' '}
          <a
            href="mailto:support@quantumhedgehogs.com"
            className="text-indigo-400 hover:underline"
          >
            support@quantumhedgehogs.com
          </a>
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            className="text-indigo-400 hover:text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            className="text-indigo-400 hover:text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            className="text-indigo-400 hover:text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
