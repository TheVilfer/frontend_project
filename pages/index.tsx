import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className={`py-12`}>
      <Head>
        <title>Quantum Hedgehogs</title>
        <meta
          name="description"
          content="An innovative app that manages your wardrobe and creates stunning outfits using cutting-edge AI."
        />
      </Head>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Unlock Your Perfect Look Every Day <br /> with Quantum Hedgehogs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            An innovative app that manages your wardrobe and creates stunning
            outfits using cutting-edge AI.
          </p>
          <Link
            href="/app"
            className="mt-8 inline-block bg-indigo-600 text-white py-3 px-6 rounded-md"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Features
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Smart Wardrobe Management
              </h3>
              <p className="mt-4 text-gray-600">
                Easily organize your wardrobe with our intuitive app. Add new
                items, categorize them, and keep track of what you own.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                AI-Generated Outfits
              </h3>
              <p className="mt-4 text-gray-600">
                Let our advanced AI suggest outfits for any occasion. Whether
                it&rsquo;s a casual day out or a formal event, we&rsquo;ve got
                you covered.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Personalized Style Recommendations
              </h3>
              <p className="mt-4 text-gray-600">
                Receive style tips and recommendations tailored to your
                preferences and wardrobe. Enhance your style with expert advice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Seasonal Trends and Insights
              </h3>
              <p className="mt-4 text-gray-600">
                Stay up-to-date with the latest fashion trends. Our app analyzes
                seasonal trends and suggests how to incorporate them into your
                wardrobe.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Eco-Friendly Fashion Choices
              </h3>
              <p className="mt-4 text-gray-600">
                Make sustainable fashion choices with our eco-friendly
                suggestions. Reduce waste by optimizing your wardrobe and
                wearing what you own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Step 1: Sign Up and Set Up Your Profile
              </h3>
              <p className="mt-4 text-gray-600">
                Create an account and fill out your style preferences and
                wardrobe details.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Step 2: Upload Your Wardrobe
              </h3>
              <p className="mt-4 text-gray-600">
                Easily upload pictures of your clothes and categorize them.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Step 3: Get Daily Outfit Suggestions
              </h3>
              <p className="mt-4 text-gray-600">
                Receive daily outfit suggestions based on your wardrobe and the
                latest trends.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Step 4: Enjoy Your New Look
              </h3>
              <p className="mt-4 text-gray-600">
                Look your best every day with personalized, AI-generated
                outfits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Testimonials
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                &quot;Quantum Hedgehogs transformed my daily routine! I never
                worry about what to wear anymore.&quot;
              </p>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Jessica L., Fashion Enthusiast
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                &quot;The AI suggestions are spot on and make me feel confident
                in my style choices.&quot;
              </p>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Mark D., Professional
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                &quot;I love how eco-friendly the app is, encouraging me to make
                the most of my existing wardrobe.&quot;
              </p>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Emily R., Eco-Warrior
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Flexible plans to suit your needs
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Free Plan</h3>
              <p className="mt-4 text-gray-600">
                Basic features, limited wardrobe items.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Premium Plan</h3>
              <p className="mt-4 text-gray-600">
                Unlimited wardrobe items, advanced AI features, priority
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            FAQ
          </h2>
          <div className="mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                How does Quantum Hedgehogs suggest outfits?
              </h3>
              <p className="mt-4 text-gray-600">
                Our AI analyzes your wardrobe and style preferences to generate
                personalized outfit suggestions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Is my wardrobe data secure?
              </h3>
              <p className="mt-4 text-gray-600">
                Yes, we use top-tier security measures to protect your data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Can I use the app for special occasions?
              </h3>
              <p className="mt-4 text-gray-600">
                Absolutely! Our AI can suggest outfits for any occasion, from
                casual to formal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
