import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const CryptoDashboard = () => {
  const [performance, setPerformance] = useState({
    currentPrice: 16815.46,
    todayLow: 46930.22,
    todayHigh: 49343.83,
    weekLow: 16930.22,
    weekHigh: 49743.83,
    currentValue: 48637.83,
    marketCap: 323507290047,
    marketCapDominance: 38.343,
    volumeMarketCap: 0.0718,
    tradingVolume: 23249202782,
    allTimeHigh: {
      value: 69044.77,
      date: "Nov 10, 2021",
      change: -75.6
    },
    allTimeLow: {
      value: 67.81,
      date: "Jul 06, 2013",
      change: 24729.1
    }
  });

  const [sentiment, setSentiment] = useState({
    buy: 76,
    hold: 8,
    sell: 16
  });

  const renderProgressBar = (low, high, current) => {
    const range = high - low;
    const position = ((current - low) / range) * 100;
    
    return (
      <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
        <div 
          className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full relative"
        >
          <div 
            className="absolute w-3 h-3 bg-black rounded-full -top-0.5"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      {/* Performance Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Performance</h2>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Today's Low</span>
              <span>Today's High</span>
            </div>
            {renderProgressBar(performance.todayLow, performance.todayHigh, performance.currentValue)}
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>52W Low</span>
              <span>52W High</span>
            </div>
            {renderProgressBar(performance.weekLow, performance.weekHigh, performance.currentValue)}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">Bitcoin Price</span>
                  <p className="font-semibold">${performance.currentPrice.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-gray-600">24h Low / 24h High</span>
                  <p className="font-semibold">${performance.todayLow.toLocaleString()} / ${performance.todayHigh.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-gray-600">Trading Volume</span>
                  <p className="font-semibold">${performance.tradingVolume.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">Market Cap</span>
                  <p className="font-semibold">${performance.marketCap.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-gray-600">Volume / Market Cap</span>
                  <p className="font-semibold">{performance.volumeMarketCap}</p>
                </div>
                <div>
                  <span className="text-gray-600">Market Cap Dominance</span>
                  <p className="font-semibold">{performance.marketCapDominance}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sentiment Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Sentiment</h2>
        
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Events</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 p-2 rounded-full">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Analyst Estimates</h3>
            <div className="flex items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
                <span className="text-3xl text-green-500 font-semibold">{sentiment.buy}%</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <div className="space-y-4">
        {/* Buy */}
        <div className="flex items-center gap-3">
          <span className="w-12 text-sm text-gray-600">Buy</span>
          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-green-500 rounded"
              style={{ width: `${sentiment.buy}%` }}
            />
          </div>
          <span className="w-12 text-sm text-gray-600">{sentiment.buy}%</span>
        </div>

        {/* Hold */}
        <div className="flex items-center gap-4">
          <span className="w-12 text-sm text-gray-600">Hold</span>
          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-gray-400 rounded"
              style={{ width: `${sentiment.hold}%` }}
            />
          </div>
          <span className="w-12 text-sm text-gray-600">{sentiment.hold}%</span>
        </div>

        {/* Sell */}
        <div className="flex items-center gap-4">
          <span className="w-12 text-sm text-gray-600">Sell</span>
          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-red-500 rounded"
              style={{ width: `${sentiment.sell}%` }}
            />
          </div>
          <span className="w-12 text-sm text-gray-600">{sentiment.sell}%</span>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDashboard;