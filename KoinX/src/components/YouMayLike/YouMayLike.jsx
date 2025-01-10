import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
const YouMayLike = ({ trendingCoins }) => {
  return (
    <div className="mt-12 mb-6">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="relative">
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 pb-4">
            {[...trendingCoins, ...trendingCoins].map((coin, index) => (
              <div
                key={`${coin.item.id}-${index}`}
                className="bg-white p-4 rounded-lg shadow-sm min-w-[280px]"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={coin.item.thumb}
                    alt={coin.item.name}
                    className="w-6 h-6"
                  />
                  <span className="font-medium">{coin.item.symbol}</span>
                  <span className={`ml-auto ${
                    coin.item.data.price_change_percentage_24h.usd >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}>
                    {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </span>
                </div>
                <div className="text-xl font-bold mt-2">
                  ${formatCurrency(coin.item.data.price)}
                </div>
                <img
                  src={coin.item.data.sparkline}
                  alt="Price graph"
                  className="w-full h-16 mt-2"
                />
              </div>
            ))}
          </div>
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default YouMayLike;