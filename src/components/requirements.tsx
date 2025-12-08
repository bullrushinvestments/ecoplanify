import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsFormInputs {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { register, handleSubmit, formState: { errors: formErrors }, reset } = useForm<GatherRequirementsFormInputs>();
  const router = useRouter();

  useEffect(() => {
    // Reset form on component mount
    reset();
  }, [reset]);

  const onSubmit: SubmitHandler<GatherRequirementsFormInputs> = (data) => {
    setLoading(true);
    setTimeout(() => {
      try {
        console.log('Data submitted:', data);
        router.push('/success'); // Redirect to success page
      } catch (error) {
        setErrors({ ...formErrors, serverError: 'An error occurred while submitting the form.' });
      }
      setLoading(false);
    }, 1000); // Simulate API call delay
  };

  const addRequirement = () => {
    reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Array.from({ length: data.requirements.length }, (_, i) => (
          <div key={`requirement-${i}`} className="mb-4">
            <label htmlFor={`name-${i}`} className="block text-sm font-medium mb-1">Name</label>
            <input
              id={`name-${i}`}
              type="text"
              {...register(`requirements.${i}.name`, { required: 'This field is required.' })}
              aria-label={`Requirement name ${i + 1}`}
              className="w-full p-2 border rounded"
            />
            {formErrors[`requirements.${i}.name`] && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                {formErrors[`requirements.${i}.name`].message}
              </p>
            )}

            <label htmlFor={`description-${i}`} className="block text-sm font-medium mb-1">Description</label>
            <textarea
              id={`description-${i}`}
              {...register(`requirements.${i}.description`, { required: 'This field is required.' })}
              aria-label={`Requirement description ${i + 1}`}
              rows={3}
              className="w-full p-2 border rounded"
            />
            {formErrors[`requirements.${i}.description`] && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                {formErrors[`requirements.${i}.description`].message}
              </p>
            )}

            <label htmlFor={`isEssential-${i}`} className="block text-sm font-medium mb-1">Is Essential</label>
            <input
              id={`isEssential-${i}`}
              type="checkbox"
              {...register(`requirements.${i}.isEssential`, { required: 'This field is required.' })}
              aria-label={`Requirement essential ${i + 1}`}
              className="w-full p-2 border rounded"
            />
            {formErrors[`requirements.${i}.isEssential`] && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                {formErrors[`requirements.${i}.isEssential`].message}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          aria-label="Submit requirements form"
          className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsFormInputs {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { register, handleSubmit, formState: { errors: formErrors }, reset } = useForm<GatherRequirementsFormInputs>();
  const router = useRouter();

  useEffect(() => {
    // Reset form on component mount
    reset();
  }, [reset]);

  const onSubmit: SubmitHandler<GatherRequirementsFormInputs> = (data) => {
    setLoading(true);
    setTimeout(() => {
      try {
        console.log('Data submitted:', data);
        router.push('/success'); // Redirect to success page
      } catch (error) {
        setErrors({ ...formErrors, serverError: 'An error occurred while submitting the form.' });
      }
      setLoading(false);
    }, 1000); // Simulate API call delay
  };

  const addRequirement = () => {
    reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Array.from({ length: data.requirements.length }, (_, i) => (
          <div key={`requirement-${i}`} className="mb-4">
            <label htmlFor={`name-${i}`} className="block text-sm font-medium mb-1">Name</label>
            <input
              id={`name-${i}`}
              type="text"
              {...register(`requirements.${i}.name`, { required: 'This field is required.' })}
              aria-label={`Requirement name ${i + 1}`}
              className="w-full p-2 border rounded"
            />
            {formErrors[`requirements.${i}.name`] && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                {formErrors[`requirements.${i}.name`].message}
              </p>
            )}

            <label htmlFor={`description-${i}`} className="block text-sm font-medium mb-1">Description</label>
            <textarea
              id={`description-${i}`}
              {...register(`requirements.${i}.description`, { required: 'This field is required.' })}
              aria-label={`Requirement description ${i + 1}`}
              rows={3}
              className="w-full p-2 border rounded"
            />
            {formErrors[`requirements.${i}.description`] && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                {formErrors[`requirements.${i}.description`].message}
              </p>
            )}

            <label htmlFor={`isEssential-${i}`} className="block text-sm font-medium mb-1">Is Essential</label>
            <input
              id={`isEssential-${i}`}
              type="checkbox"
              {...register(`requirements.${i}.isEssential`, { required: 'This field is required.' })}
              aria-label={`Requirement essential ${i + 1}`}
              className="w-full p-2 border rounded"
            />
            {formErrors[`requirements.${i}.isEssential`] && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                {formErrors[`requirements.${i}.isEssential`].message}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          aria-label="Submit requirements form"
          className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default GatherRequirements;