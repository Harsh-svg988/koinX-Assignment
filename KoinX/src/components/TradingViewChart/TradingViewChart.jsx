import React, { useEffect, useRef } from 'react';

const TradingViewChart = ({ symbol }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        symbol: `${symbol}USD`,
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: 'tradingview_chart',
        height: '400'
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [symbol]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div id="tradingview_chart" ref={container} />
    </div>
  );
};

export default TradingViewChart;