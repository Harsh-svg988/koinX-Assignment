import React from 'react';
import { formatCurrency } from '../../utils/formatters';

const TrendingCoins = ({ coins }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-6 h-6"
              />
              <span className="font-medium">{coin.item.name}</span>
            </div>
            <span className={`${
              coin.item.data.price_change_percentage_24h.usd >= 0
                ? 'text-green-500'
                : 'text-red-500'
            }`}>
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;