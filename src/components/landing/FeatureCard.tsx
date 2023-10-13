// FeatureCard.tsx

import React from 'react';

interface Feature {
  icon: string;
  title: string;
  content: string;
  id: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  featuresLength: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature: {icon, title, content}, index, featuresLength }) => (
  <div className={`flex flex-row p-6 rounded-lg ${index !== featuresLength - 1 ? "mb-6" : "mb-0"} bg-[#yourColorHere]`}>
    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-800">
      <img src={icon} alt={title} className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-lg leading-6 mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-base leading-6">
        {content}
      </p>
    </div>
  </div>
);

export default FeatureCard;
