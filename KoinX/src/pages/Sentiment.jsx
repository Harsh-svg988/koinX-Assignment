import React from "react";

const Sentiment = () => {
  const keyEvents = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt. Ac pharetra risus est faucibus metus quis.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac pharetra risus est faucibus metus quis. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
  ];

  const analystEstimates = {
    buy: 76,
    hold: 8,
    sell: 16,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <h2 className="text-xl font-bold mb-4">Sentiment</h2>

      {/* Key Events Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Key Events</h3>
        <div className="grid gap-4">
          {keyEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-bold">{event.title}</h4>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <h3 className="text-lg font-bold mb-2">Analyst Estimates</h3>
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">{analystEstimates.buy}%</div>
          <div className="w-full ml-4">
            <div className="flex items-center text-sm">
              <span className="text-green-600 font-bold">Buy</span>
              <div
                className="h-2 bg-green-600 mx-2 rounded-full"
                style={{ width: `${analystEstimates.buy}%` }}
              ></div>
              <span>{analystEstimates.buy}%</span>
            </div>
            <div className="flex items-center text-sm mt-1">
              <span className="text-yellow-600 font-bold">Hold</span>
              <div
                className="h-2 bg-yellow-600 mx-2 rounded-full"
                style={{ width: `${analystEstimates.hold}%` }}
              ></div>
              <span>{analystEstimates.hold}%</span>
            </div>
            <div className="flex items-center text-sm mt-1">
              <span className="text-red-600 font-bold">Sell</span>
              <div
                className="h-2 bg-red-600 mx-2 rounded-full"
                style={{ width: `${analystEstimates.sell}%` }}
              ></div>
              <span>{analystEstimates.sell}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sentiment