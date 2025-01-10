import React from 'react';
import { Bitcoin} from 'lucide-react';

 
 
 const LeftSection = () => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <Bitcoin className="h-8 w-8 text-orange-400" />
          <div>
            <h2 className="text-xl font-semibold">Bitcoin</h2>
            <span className="text-gray-500">BTC</span>
          </div>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Rank #1</span>
        </div>
        <div className="mb-6">
          <div className="text-3xl font-bold">$46,953.04</div>
          <div className="text-gray-600">₹ 39,42,343</div>
          <span className="text-green-500 text-sm">▲ 2.51% (24h)</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex space-x-4 text-sm">
            <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">1H</button>
            <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">24H</button>
            <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">7D</button>
            <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">1M</button>
            <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">3M</button>
            <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">ALL</button>
          </div>
        </div>
      </div>
    );
  };


  export default LeftSection