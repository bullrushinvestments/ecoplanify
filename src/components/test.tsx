import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  id: number;
  text: string;
  type: string; // e.g., "multiple_choice", "short_answer"
  options?: Option[]; // Only for multiple choice
}

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

const WriteTests: React.FC = () => {
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await axios.get('/api/tests/{testId}');
        setTest(response.data);
      } catch (err) {
        setError('Failed to load test');
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div role="alert" aria-live="polite">{error}</div>;

  const router = useRouter();

  const handleSave = async () => {
    try {
      await axios.put(`/api/tests/${test?.id}`, test);
      router.push('/tests');
    } catch (err) {
      setError('Failed to save the test');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Write Test</h1>
      {test && (
        <>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={test.title}
              onChange={(e) => setTest({ ...test, title: e.target.value })}
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">
              Description
            </label>
            <textarea
              id="description"
              value={test.description}
              onChange={(e) => setTest({ ...test, description: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </form>

          {test.questions.map((question) => (
            <div key={question.id} className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">{question.text}</h3>
              {question.type === 'multiple_choice' && question.options?.map((option, index) => (
                <label key={index} htmlFor={`q${question.id}-${index}`} className="block mt-2">
                  <input
                    type="radio"
                    name={`q${question.id}`}
                    value={option.text}
                    checked={option.isCorrect}
                    onChange={(e) => {
                      setTest({
                        ...test,
                        questions: test.questions.map(q =>
                          q.id === question.id ? { ...q, options: q.options?.map(o => (o.id === option.id ? { ...o, isCorrect: e.target.checked } : o)) } : q
                        )
                      });
                    }}
                  />
                  <span className="ml-2">{option.text}</span>
                </label>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  id: number;
  text: string;
  type: string; // e.g., "multiple_choice", "short_answer"
  options?: Option[]; // Only for multiple choice
}

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

const WriteTests: React.FC = () => {
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await axios.get('/api/tests/{testId}');
        setTest(response.data);
      } catch (err) {
        setError('Failed to load test');
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div role="alert" aria-live="polite">{error}</div>;

  const router = useRouter();

  const handleSave = async () => {
    try {
      await axios.put(`/api/tests/${test?.id}`, test);
      router.push('/tests');
    } catch (err) {
      setError('Failed to save the test');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Write Test</h1>
      {test && (
        <>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={test.title}
              onChange={(e) => setTest({ ...test, title: e.target.value })}
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">
              Description
            </label>
            <textarea
              id="description"
              value={test.description}
              onChange={(e) => setTest({ ...test, description: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </form>

          {test.questions.map((question) => (
            <div key={question.id} className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">{question.text}</h3>
              {question.type === 'multiple_choice' && question.options?.map((option, index) => (
                <label key={index} htmlFor={`q${question.id}-${index}`} className="block mt-2">
                  <input
                    type="radio"
                    name={`q${question.id}`}
                    value={option.text}
                    checked={option.isCorrect}
                    onChange={(e) => {
                      setTest({
                        ...test,
                        questions: test.questions.map(q =>
                          q.id === question.id ? { ...q, options: q.options?.map(o => (o.id === option.id ? { ...o, isCorrect: e.target.checked } : o)) } : q
                        )
                      });
                    }}
                  />
                  <span className="ml-2">{option.text}</span>
                </label>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WriteTests;