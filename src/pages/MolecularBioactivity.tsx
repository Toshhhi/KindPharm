import React, { useState } from 'react';

export const MolecularBioactivity = () => {
  const [targetProtein, setTargetProtein] = useState('');
  const [bioactivityResult, setBioactivityResult] = useState<null | {
    activity: number;
    classification: 'active' | 'inactive';
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy calculation
    const randomActivity = Math.random() * 100;
    setBioactivityResult({
      activity: randomActivity,
      classification: randomActivity > 50 ? 'active' : 'inactive'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Calculate Molecular Bioactivity</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Protein or Enzyme
            </label>
            <select
              value={targetProtein}
              onChange={(e) => setTargetProtein(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select a target</option>
              <option value="ace2">ACE2</option>
              <option value="cytochrome">Cytochrome P450</option>
              <option value="kinase">Protein Kinase</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate Bioactivity
          </button>
        </form>

        {bioactivityResult && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Results</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Bioactivity Score</p>
                <p className="text-lg font-medium text-gray-900">
                  {bioactivityResult.activity.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Classification</p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    bioactivityResult.classification === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {bioactivityResult.classification}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};