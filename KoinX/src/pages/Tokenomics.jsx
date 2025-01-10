import React from "react";

const Tokenomics = () => {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tokenomics</h2>
        <div className="flex -space-x-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded">A</span>
          <span className="bg-purple-500 text-white px-2 py-1 rounded">Z</span>
          <span className="bg-red-500 text-white px-2 py-1 rounded">H</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Initial Distribution</h3>
          <div className="flex flex-col md:flex-row items-center md:gap-10">
            {/* Pie Chart */}
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                {/* Crowdsale Investors - 80% */}
                <circle
                  r="16"
                  cx="16"
                  cy="16"
                  fill="transparent"
                  stroke="blue"
                  strokeWidth="32"
                  strokeDasharray="80 20"
                  strokeDashoffset="0"
                />
                {/* Foundation - 20% */}
                <circle
                  r="16"
                  cx="16"
                  cy="16"
                  fill="transparent"
                  stroke="orange"
                  strokeWidth="32"
                  strokeDasharray="20 80"
                  strokeDashoffset="-80"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-700">100%</span>
              </div>
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
