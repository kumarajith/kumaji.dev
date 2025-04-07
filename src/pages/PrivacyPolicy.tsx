
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Thank you for using our app.</p>
          <p className="mb-4">We respect your privacy. This application does not collect, store, or share any personal information. No user data is transmitted or saved locally or remotely.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
