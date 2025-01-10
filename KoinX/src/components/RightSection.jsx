const RightSection = () => {
    return (
      <div className="space-y-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Get Started with KoinX for FREE</h3>
          <p className="mb-6">
            With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get Started for FREE →
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Trending Coins (24h)</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Ethereum (ETH)</span>
              <span className="text-green-500">▲ 8.21%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Bitcoin (BTC)</span>
              <span className="text-green-500">▲ 5.26%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Polygon (MATIC)</span>
              <span className="text-green-500">▲ 4.32%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default RightSection