import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestimonialForm {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonials: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialForm>();

  const onSubmit: SubmitHandler<TestimonialForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/testimonials', data);
      reset();
    } catch (err) {
      setError('An error occurred while submitting your testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Write a Testimonial</h1>
      {error && <p className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" {...register('name', { required: true })} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name.message}</p>}
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="email" {...register('email', { required: true })} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email.message}</p>}
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <textarea {...register('message', { required: true })} id="floating_message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
          {errors.message && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={loading} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ${loading ? 'cursor-not-allowed opacity-60' : ''}`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonials;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestimonialForm {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonials: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialForm>();

  const onSubmit: SubmitHandler<TestimonialForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/testimonials', data);
      reset();
    } catch (err) {
      setError('An error occurred while submitting your testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Write a Testimonial</h1>
      {error && <p className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" {...register('name', { required: true })} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name.message}</p>}
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="email" {...register('email', { required: true })} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email.message}</p>}
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <textarea {...register('message', { required: true })} id="floating_message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
          {errors.message && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={loading} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ${loading ? 'cursor-not-allowed opacity-60' : ''}`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonials;