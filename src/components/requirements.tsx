import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  id: number;
  name: string;
  description?: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm<IGatherRequirementsForm>();

  const onSubmit = (data: IGatherRequirementsForm) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      router.push('/success');
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <div className="mb-4">
        <label htmlFor="requirements" className="block text-gray-700 font-bold mb-1">
          List of requirements
        </label>
        <textarea
          id="requirements"
          name="requirements"
          ref={register({ required: true })}
          rows={5}
          placeholder="Enter your requirements here..."
          aria-required="true"
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
        />
        {errors.requirements && <span>This field is required</span>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  id: number;
  name: string;
  description?: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm<IGatherRequirementsForm>();

  const onSubmit = (data: IGatherRequirementsForm) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      router.push('/success');
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <div className="mb-4">
        <label htmlFor="requirements" className="block text-gray-700 font-bold mb-1">
          List of requirements
        </label>
        <textarea
          id="requirements"
          name="requirements"
          ref={register({ required: true })}
          rows={5}
          placeholder="Enter your requirements here..."
          aria-required="true"
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
        />
        {errors.requirements && <span>This field is required</span>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;