import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import typeClother from '@/utils/type.json';

export default function AddItem() {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [img, setImg] = useState<File | null>(null);
  const [errors, setErrors] = useState<{
    name?: string;
    type?: string;
    img?: string;
  }>({});
  const router = useRouter();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };

  const validate = () => {
    const newErrors: { name?: string; type?: string; img?: string } = {};
    if (!name) newErrors.name = 'Name is required';
    if (!type) newErrors.type = 'Type is required';
    if (!img) newErrors.img = 'Image is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // For now, we just log the input values.
    console.log({ name, type, img });

    // convert img to base64 string
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      const response = await fetch('/api/app/addItem', {
        method: 'POST',
        body: JSON.stringify({ name, type, img: base64String }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        router.push('/app/wardrobe');
      } else {
        // handle error response if needed
        console.error('Failed to add item');
      }
    };
    reader.readAsDataURL(img as Blob);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Add New Item
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className={`mt-1 block w-full pl-3 pr-10 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md`}
              required
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="type"
              className="block text-lg font-medium text-gray-700"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={handleTypeChange}
              className={`mt-1 block w-full pl-3 pr-10 py-2 border ${errors.type ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md`}
              required
            />
            {errors.type && (
              <p className="mt-2 text-sm text-red-600">{errors.type}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="img"
              className="block text-lg font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="img"
              accept="image/*"
              onChange={handleImageChange}
              className={`mt-1 block w-full text-gray-500 ${errors.img ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.img && (
              <p className="mt-2 text-sm text-red-600">{errors.img}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
