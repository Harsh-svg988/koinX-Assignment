import React from "react";

const Tokenomics = () => {
    const data = [
        { label: 'Crowdsale investors', percentage: 80, color: '#3B82F6' },
        { label: 'Foundation', percentage: 20, color: '#FB923C' }
      ];
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tokenomics</h2>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Initial Distribution</h3>
          <div className="flex flex-col md:flex-row items-center md:gap-10">
            {/* Pie Chart */}
            <div className="relative w-64 h-64">
        <svg 
          viewBox="0 0 120 120"
          className="w-full h-full -rotate-90"
        >
          {data.map((item, index) => {
            // Calculate the start position for each segment
            const startAngle = data
              .slice(0, index)
              .reduce((sum, d) => sum + (d.percentage / 100) * 360, 0);
            
            // Convert percentage to SVG arc parameters
            const angle = (item.percentage / 100) * 360;
            const radius = 40;
            const centerX = 60;
            const centerY = 60;
            
            // Calculate end point of arc
            const endAngle = startAngle + angle;
            const startRadian = (startAngle * Math.PI) / 180;
            const endRadian = (endAngle * Math.PI) / 180;
            
            // Calculate points
            const x1 = centerX + radius * Math.cos(startRadian);
            const y1 = centerY + radius * Math.sin(startRadian);
            const x2 = centerX + radius * Math.cos(endRadian);
            const y2 = centerY + radius * Math.sin(endRadian);
            
            // Determine if the arc should be drawn the long way around
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            // Create the SVG path
            const path = [
              `M ${centerX + (radius * Math.cos(startRadian))} ${centerY + (radius * Math.sin(startRadian))}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${centerX + (radius * Math.cos(endRadian))} ${centerY + (radius * Math.sin(endRadian))}`,
              `L ${centerX + ((radius - 20) * Math.cos(endRadian))} ${centerY + ((radius - 20) * Math.sin(endRadian))}`,
              `A ${radius - 20} ${radius - 20} 0 ${largeArcFlag} 0 ${centerX + ((radius - 20) * Math.cos(startRadian))} ${centerY + ((radius - 20) * Math.sin(startRadian))}`,
              'Z'
            ].join(' ');

            return (
              <path
                key={item.label}
                d={path}
                fill={item.color}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>
      </div>
            {/* Legend */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 text-sm font-medium">
                  Crowdsale Investors: <span className="font-bold">80%</span>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <span className="text-gray-700 text-sm font-medium">
                  Foundation: <span className="font-bold">20%</span>
                </span>
              </div>
            </div>
          </div>
          {/* Additional Description */}
          <p className="text-gray-700 leading-relaxed mt-6">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
            consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend
            lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam
            fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget
            in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
            odio nisi eu ac risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
