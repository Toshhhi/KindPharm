import React from 'react';
import { useAuth } from '../components/AuthContext';

export const Pricing = () => {
  const { user } = useAuth();
  const isStudent = user?.role === 'student';

  const plans = [
    {
      name: 'Student',
      price: 'Free',
      features: [
        '14 search operations/week',
        'Basic molecular bioactivity analysis',
        'Collaboration tools',
        'Basic patent search'
      ],
      isStudent: true
    },
    {
      name: 'Professional Standard',
      price: '$35/week',
      features: [
        '150 research operations/week',
        'Advanced molecular analysis',
        'Priority collaboration tools',
        'Comprehensive patent search',
        'Priority support'
      ],
      isStudent: false
    },
    {
      name: 'Professional Premium',
      price: '$50/week',
      features: [
        '120 research operations/week',
        'Premium molecular analysis',
        'Advanced collaboration tools',
        'Full patent search & analysis',
        '24/7 priority support',
        'Custom research tools'
      ],
      isStudent: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center">
          Pricing Plans
        </h1>
        <p className="mt-5 text-xl text-gray-500 text-center">
          Choose the perfect plan for your research needs
        </p>
      </div>

      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
              plan.isStudent === isStudent ? 'bg-white ring-2 ring-indigo-500' : 'bg-gray-50'
            }`}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
              <p className="mt-4 text-sm text-gray-500">
                {plan.isStudent ? 'For students only' : 'For working professionals'}
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
              </p>
              <button
                className={`mt-8 block w-full py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white ${
                  plan.isStudent === isStudent
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={plan.isStudent !== isStudent}
              >
                {plan.isStudent === isStudent ? 'Get started' : 'Not available'}
              </button>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};