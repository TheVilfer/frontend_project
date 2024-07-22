import Head from 'next/head';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Andrew Levada',
    role: 'Co-Founder & CPO',
    photo: '/andrew_levada.jpg',
  },
  {
    name: 'Sergei Polin',
    role: 'Co-Founder & CEO',
    photo: '/sergei_polin.jpg',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <Head>
        <title>About - Quantum Hedgehogs</title>
        <meta
          name="description"
          content="Learn more about Quantum Hedgehogs, the app that helps you manage your wardrobe and generate looks using AI."
        />
      </Head>
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          About Quantum Hedgehogs
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Quantum Hedgehogs, we aim to revolutionize the way you manage
            your wardrobe and style your outfits using cutting-edge AI
            technology. Our goal is to simplify your daily routine by providing
            personalized outfit suggestions and efficient wardrobe management
            tools.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Smart Wardrobe Management</li>
            <li>AI-Generated Outfit Suggestions</li>
            <li>Personalized Style Recommendations</li>
            <li>Seasonal Trends and Insights</li>
            <li>Eco-Friendly Fashion Choices</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <div className="flex flex-wrap gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions, feedback, or just want to say hi, feel
            free to reach out to us at{' '}
            <a
              href="mailto:support@quantumhedgehogs.com"
              className="text-indigo-600 hover:underline"
            >
              support@quantumhedgehogs.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
