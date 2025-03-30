import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { Navigation } from './components/Navigation';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/Dashboard';
import { MolecularBioactivity } from './pages/MolecularBioactivity';
import { PastResults } from './pages/PastResults';
import { Collaborate } from './pages/Collaborate';
import { PatentFiling } from './pages/PatentFiling';
import { Pricing } from './pages/Pricing';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/molecular-bioactivity"
                element={
                  <ProtectedRoute>
                    <MolecularBioactivity />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/past-results"
                element={
                  <ProtectedRoute>
                    <PastResults />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/collaborate"
                element={
                  <ProtectedRoute>
                    <Collaborate />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patent-filing"
                element={
                  <ProtectedRoute>
                    <PatentFiling />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;