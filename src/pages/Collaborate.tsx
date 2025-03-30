import React, { useState } from 'react';

export const Collaborate = () => {
  const [formData, setFormData] = useState({
    idea: '',
    timeRequired: '',
    peerEmail: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an invitation to the peer
    alert('Collaboration invitation sent!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Collaborate with Peers</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Proposed Idea
            </label>
            <textarea
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Describe your research idea..."
              value={formData.idea}
              onChange={(e) => setFormData({...formData, idea: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estimated Time Required
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="e.g., 2 weeks"
              value={formData.timeRequired}
              onChange={(e) => setFormData({...formData, timeRequired: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Peer's Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="colleague@institution.edu"
              value={formData.peerEmail}
              onChange={(e) => setFormData({...formData, peerEmail: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Invitation
          </button>
        </form>
      </div>
    </div>
  );
};