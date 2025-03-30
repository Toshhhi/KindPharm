import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import {
  FlaskConical,
  History,
  Users,
  FileText,
  CreditCard
} from 'lucide-react';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, Mentors!
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          What would you like to do today?
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/molecular-bioactivity"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FlaskConical className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Calculate Molecular Bioactivity</h3>
            <p className="mt-2 text-sm text-gray-600">
              Analyze and calculate molecular descriptors for your research
            </p>
          </Link>

          <Link
            to="/past-results"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <History className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Past Results</h3>
            <p className="mt-2 text-sm text-gray-600">
              View and analyze your previous research results
            </p>
          </Link>

          <Link
            to="/collaborate"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Users className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Collaborate</h3>
            <p className="mt-2 text-sm text-gray-600">
              Connect and work with other researchers
            </p>
          </Link>

          <Link
            to="/patent-filing"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FileText className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Patent Filing</h3>
            <p className="mt-2 text-sm text-gray-600">
              Submit and manage your patent applications
            </p>
          </Link>

          <Link
            to="/pricing"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <CreditCard className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Pricing Plans</h3>
            <p className="mt-2 text-sm text-gray-600">
              View and manage your subscription
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};