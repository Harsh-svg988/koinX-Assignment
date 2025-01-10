import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutBitcoin = () => {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h1 className="text-2xl font-bold mb-6">About Bitcoin</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-3">What is Bitcoin?</h2>
          <p className="text-gray-700 leading-relaxed">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 
            24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time 
            low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus 
            urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque 
            fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. 
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. 
            Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus 
            enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing 
            semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames 
            amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Already Holding Bitcoin?</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-400 to-blue-600">
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Calculate your Profits</h3>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium flex items-center">
                    Check Now
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
                <div className="flex">
                  <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">S</div>
                  <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold -ml-2">H</div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-400 to-red-600">
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Calculate your tax liability</h3>
                  <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium flex items-center">
                    Check Now
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing 
            semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames 
            amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  );
};
 export default AboutBitcoin