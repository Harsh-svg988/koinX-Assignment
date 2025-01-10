import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCryptoData, fetchTrendingCoins } from '../utils/api';
import Navbar from '../components/Navbar/Navbar';
import CryptoHeader from '../components/CryptoHeader/CryptoHeader'
import TradingViewChart from '../components/TradingViewChart/TradingViewChart';
import TabPanel from '../components/TabPanel/TabPanel';
import GetStartedCard from '../components/GetStartedCard/GetStartedCard';
import TrendingCoins from '../components/TrendingCoins/TrendingCoins';
import YouMayLike from '../components/YouMayLike/YouMayLike';
import Performance from './Performance';
import Sentiment from './Sentiment';
import CryptoDashboard from './CryptoDashboard';
import AboutBitcoin from './AboutBitcoin';
import Tokenomics from './Tokenomics';
import TeamSection from './TeamSection';
import PieChartDonut from '../components/PieChartDonut';

const CryptoPage = () => {
  const { coinId = 'bitcoin' } = useParams();
  const [cryptoData, setCryptoData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [priceData, trendingData] = await Promise.all([
          fetchCryptoData(coinId),
          fetchTrendingCoins()
          
        ]);
        console.log(trendingData)

        setCryptoData(priceData[coinId]);
        setTrendingCoins(trendingData.coins.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [coinId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="text-sm text-gray-500 mb-4">
          Cryptocurrencies &gt;&gt; {coinId.charAt(0).toUpperCase() + coinId.slice(1)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CryptoHeader data={cryptoData} coinId={coinId} />
            <TradingViewChart symbol={coinId.toUpperCase()} />
            <TabPanel />
            {/* <Performance/>
            <Sentiment/> */}
            <CryptoDashboard/>
            <AboutBitcoin/>
            <Tokenomics/>
            <TeamSection/>
            
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <GetStartedCard />
            <TrendingCoins coins={trendingCoins} />
          </div>
        </div>

        <YouMayLike trendingCoins={trendingCoins} />
      </main>
    </div>
  );
};

export default CryptoPage;