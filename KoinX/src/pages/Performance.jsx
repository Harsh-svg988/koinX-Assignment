import React from "react";

const Performance = () => {
  const todaysLow = "48,000.00";
  const todaysHigh = "49,500.00";
  const fiftyTwoWeekLow = "16,930.22";
  const fiftyTwoWeekHigh = "49,743.83";

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <h2 className="text-xl font-bold mb-4">Performance</h2>
      <div className="flex justify-between text-lg font-medium">
        <div>Today's Low</div>
        <div>Today's High</div>
      </div>
      <div className="flex justify-between text-gray-600">
        <div>${todaysLow}</div>
        <div>${todaysHigh}</div>
      </div>
      <div className="mt-4 flex justify-between text-lg font-medium">
        <div>52W Low</div>
        <div>52W High</div>
      </div>
      <div className="flex justify-between text-gray-600">
        <div>${fiftyTwoWeekLow}</div>
        <div>${fiftyTwoWeekHigh}</div>
      </div>
    </div>
  );
};
  export default Performance


// import React, { useState, useEffect } from 'react';
// import { Card } from '@/components/ui/card';
// import { ChevronRight } from 'lucide-react';

// const Performance = () => {
//   const [performance, setPerformance] = useState({
//     currentPrice: 16815.46,
//     todayLow: 46930.22,
//     todayHigh: 49343.83,
//     weekLow: 16930.22,
//     weekHigh: 49743.83,
//     currentValue: 48637.83,
//     marketCap: 323507290047,
//     marketCapDominance: 38.343,
//     volumeMarketCap: 0.0718,
//     tradingVolume: 23249202782,
//     allTimeHigh: {
//       value: 69044.77,
//       date: "Nov 10, 2021",
//       change: -75.6
//     },
//     allTimeLow: {
//       value: 67.81,
//       date: "Jul 06, 2013",
//       change: 24729.1
//     }
//   });

//   const renderProgressBar = (low, high, current) => {
//     const range = high - low;
//     const position = ((current - low) / range) * 100;
    
//     return (
//       <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
//         <div 
//           className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full relative"
//         >
//           <div 
//             className="absolute w-3 h-3 bg-black rounded-full -top-0.5"
//             style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
//           />
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="w-full max-w-4xl space-y-6">
//       {/* Performance Section */}
//       {/* <Card className="p-6"> */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold">Performance</h2>
//           <div className="flex space-x-2">
//             <span className="bg-blue-500 text-white px-2 py-1 rounded">A</span>
//             <span className="bg-yellow-500 text-white px-2 py-1 rounded">V</span>
//             <span className="bg-green-500 text-white px-2 py-1 rounded">S</span>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <div className="flex justify-between text-sm text-gray-600">
//               <span>Today's Low</span>
//               <span>Today's High</span>
//             </div>
//             {renderProgressBar(performance.todayLow, performance.todayHigh, performance.currentValue)}
//           </div>

//           <div>
//             <div className="flex justify-between text-sm text-gray-600">
//               <span>52W Low</span>
//               <span>52W High</span>
//             </div>
//             {renderProgressBar(performance.weekLow, performance.weekHigh, performance.currentValue)}
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <div className="space-y-4">
//                 <div>
//                   <span className="text-gray-600">Bitcoin Price</span>
//                   <p className="font-semibold">${performance.currentPrice.toLocaleString()}</p>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">24h Low / 24h High</span>
//                   <p className="font-semibold">${performance.todayLow.toLocaleString()} / ${performance.todayHigh.toLocaleString()}</p>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Trading Volume</span>
//                   <p className="font-semibold">${performance.tradingVolume.toLocaleString()}</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="space-y-4">
//                 <div>
//                   <span className="text-gray-600">Market Cap</span>
//                   <p className="font-semibold">${performance.marketCap.toLocaleString()}</p>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Volume / Market Cap</span>
//                   <p className="font-semibold">{performance.volumeMarketCap}</p>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Market Cap Dominance</span>
//                   <p className="font-semibold">{performance.marketCapDominance}%</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* </Card> */}
//     </div>
//   );
// };

// export default Performance;