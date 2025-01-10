// import React, { useEffect, useRef } from 'react';

// const TradingViewChart = ({ symbol }) => {
//   const container = useRef();

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/tv.js';
//     script.async = true;
//     script.onload = () => {
//       new window.TradingView.widget({
//         symbol: `${symbol}USD`,
//         interval: 'D',
//         timezone: 'Etc/UTC',
//         theme: 'light',
//         style: '1',
//         locale: 'en',
//         toolbar_bg: '#f1f3f6',
//         enable_publishing: false,
//         allow_symbol_change: true,
//         container_id: 'tradingview_chart',
//         height: '400'
//       });
//     };
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, [symbol]);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <div id="tradingview_chart" ref={container} />
//     </div>
//   );
// };

// export default TradingViewChart;

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({symbol}) {
  const container = useRef();
  // const { coinId = 'bitcoin' } = useParams();
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "height": "400",
          "symbol": "BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "3",
          "locale": "en",
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "7D",
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
          
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);

