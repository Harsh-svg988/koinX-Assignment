import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      image: "https://avatar.iran.liara.run/public"
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      image: "https://avatar.iran.liara.run/public"
    },
    {
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      image: "https://avatar.iran.liara.run/public"
    }
  ];

  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Team</h2>
        
      </div>

      <p className="text-gray-700 mb-8">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit 
        egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>

      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-blue-50 p-6 rounded-lg flex gap-6 relative"
          >
            <div className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover mb-2"
              />
              <h3 className="font-semibold text-center">{member.name}</h3>
              <p className="text-gray-500 text-sm text-center">{member.designation}</p>
            </div>

            <p className="text-gray-700 flex-1">{member.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;