import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [specification, setSpecification] = useState<BusinessSpecification | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpecification>('https://api.example.com/business-specification')
      .then(response => {
        setSpecification(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load business specification.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const renderFeatures = () => {
    return specification?.features.map(feature => (
      <div key={feature.id} className={clsx('mb-4', isMobile ? 'text-sm' : '')}>
        <h3 className="font-semibold mb-1" aria-label={`Feature ${feature.title}`}>
          {feature.title}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: feature.details }} />
      </div>
    ));
  };

  return (
    <section id="business-specification">
      <header className={clsx('mb-4', isMobile ? 'text-lg' : 'text-xl')}>
        <h2 aria-label={`Business Specification Name`} role="heading" tabIndex={0}>
          {specification?.name}
        </h2>
      </header>
      <div className={clsx(isMobile ? 'px-4' : 'container mx-auto px-8', 'prose max-w-none')}>
        <p dangerouslySetInnerHTML={{ __html: specification?.description }} />
        {renderFeatures()}
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [specification, setSpecification] = useState<BusinessSpecification | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpecification>('https://api.example.com/business-specification')
      .then(response => {
        setSpecification(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load business specification.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const renderFeatures = () => {
    return specification?.features.map(feature => (
      <div key={feature.id} className={clsx('mb-4', isMobile ? 'text-sm' : '')}>
        <h3 className="font-semibold mb-1" aria-label={`Feature ${feature.title}`}>
          {feature.title}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: feature.details }} />
      </div>
    ));
  };

  return (
    <section id="business-specification">
      <header className={clsx('mb-4', isMobile ? 'text-lg' : 'text-xl')}>
        <h2 aria-label={`Business Specification Name`} role="heading" tabIndex={0}>
          {specification?.name}
        </h2>
      </header>
      <div className={clsx(isMobile ? 'px-4' : 'container mx-auto px-8', 'prose max-w-none')}>
        <p dangerouslySetInnerHTML={{ __html: specification?.description }} />
        {renderFeatures()}
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;