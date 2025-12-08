import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: '',
    requirements: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get('/api/business-specification');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBusinessSpec({
      ...businessSpec,
      [e.target.name]: e.target.value
    });
  };

  const handleRequirementChange = (requirementId: number, detailField: string, value: string) => {
    setBusinessSpec(prevState => ({
      ...prevState,
      requirements: prevState.requirements.map(req =>
        req.id === requirementId ? { ...req, [detailField]: value } : req
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit business specification to API or perform other actions here.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Business Specification</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={businessSpec.name}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={businessSpec.description}
            onChange={handleInputChange}
            required
            rows={4}
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {businessSpec.requirements.map(requirement => (
            <li key={requirement.id} className="py-4 flex items-center justify-between space-x-4">
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-gray-900">{requirement.title}</p>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {requirement.details}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleRequirementChange(requirement.id, 'details', '')}
                className={clsx(
                  'text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
                  'mr-2'
                )}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <button
            type="submit"
            className={clsx(
              'text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
              'mr-2'
            )}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: '',
    requirements: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get('/api/business-specification');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBusinessSpec({
      ...businessSpec,
      [e.target.name]: e.target.value
    });
  };

  const handleRequirementChange = (requirementId: number, detailField: string, value: string) => {
    setBusinessSpec(prevState => ({
      ...prevState,
      requirements: prevState.requirements.map(req =>
        req.id === requirementId ? { ...req, [detailField]: value } : req
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit business specification to API or perform other actions here.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Business Specification</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={businessSpec.name}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={businessSpec.description}
            onChange={handleInputChange}
            required
            rows={4}
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {businessSpec.requirements.map(requirement => (
            <li key={requirement.id} className="py-4 flex items-center justify-between space-x-4">
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-gray-900">{requirement.title}</p>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {requirement.details}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleRequirementChange(requirement.id, 'details', '')}
                className={clsx(
                  'text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
                  'mr-2'
                )}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <button
            type="submit"
            className={clsx(
              'text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
              'mr-2'
            )}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;