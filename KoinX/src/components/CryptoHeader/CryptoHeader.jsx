import React,{useState,useEffect} from 'react';
import { formatCurrency } from '../../utils/formatters';

const CryptoHeader = ({ data, coinId }) => {
  const { usd, inr, usd_24h_change } = data;


  // State to store the coin image URL
  const [coinImageUrl, setCoinImageUrl] = useState(null);

  // Function to fetch the coin image
  const getCoinImage = async (coinId) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await response.json();
      return data.image.small; // Return the small image URL
    } catch (error) {
      console.error('Error fetching coin data:', error);
      return null; // Return null in case of error
    }
  };

  // Fetch the coin image URL when component mounts or when coinId changes
  useEffect(() => {
    getCoinImage(coinId).then((url) => {
      setCoinImageUrl(url); // Update the state with the image URL
    });
  }, [coinId]);
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={coinImageUrl}
          alt={coinId}
          className="w-8 h-8"
        />
        <h1 className="text-2xl font-bold capitalize">{coinId}</h1>
        <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm">Rank #1</span>
      </div>
      
      <div className="mt-6">
        <div className="text-3xl font-bold">${formatCurrency(usd)}</div>
        <div className="text-lg text-gray-700">₹{formatCurrency(inr)}</div>
        <div className={`inline-flex items-center gap-2 mt-2 ${
          usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500'
        }`}>
          <span>{usd_24h_change >= 0 ? '▲' : '▼'} {Math.abs(usd_24h_change).toFixed(2)}%</span>
          <span className="text-gray-500">(24H)</span>
        </div>
      </div>
    </div>
  );
};

export default CryptoHeader;