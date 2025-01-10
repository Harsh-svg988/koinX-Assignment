import React from 'react';

const GetStartedCard = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">
        Get Started with KoinX for FREE
      </h2>
      <p className="mb-6">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
      </p>
      <img
        src="https://wpusermanager.com/content/uploads/2020/09/mailchimp-post.jpg"
        alt="KoinX Features"
        className="mx-auto mb-6"
      />
      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Get Started for FREE →
      </button>
    </div>
  );
};

export default GetStartedCard;
