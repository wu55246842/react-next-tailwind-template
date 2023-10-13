// Business.tsx

import React from 'react';
import Button from './Button';
import styles, { layout } from "./style";

export const features = [
  {
    id: "feature-1",
    icon: '/img/layout/Star.svg',
    title: "Seamless Document Uploads",
    content:
      "Easily upload your PDF and PPT files. Our intelligent system sorts and manages them for effortless retrieval and viewing.",
  },
  {
    id: "feature-2",
    icon: '/img/layout/Shield.svg',
    title: "Accessible Document Viewing",
    content:
      "Browse and read through your uploaded documents directly within our user-friendly webapp interface.",
  },
  {
    id: "feature-3",
    icon: '/img/layout/Send.svg',
    title: "Hassle-free Social Logins",
    content:
      "Get started quickly by logging in with your social media credentials. A few clicks, and you're in!",
  },
  {
    id: "feature-4",
    icon: '/img/layout/quotes.svg',
    title: "Easy Chat History Sharing",
    content:
      "Share your enlightening conversations and findings with your friends with just a couple of clicks.",
  },
];






interface Feature {
  icon: string;
  title: string;
  content: string;
  id: string;
}

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Empower Your Learning  <br className="sm:block hidden" /> Journey with Interactive Tools.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Seamlessly Upload, Explore, and Share Documents and Conversations All Within a User-friendly Intelligent Interface.
      </p>

      <Button styles={`mt-10`} text="Get Start" href="/admin/default"/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

// const Business: React.FC = () => (
//   <section id="features" className="py-20 px-10 lg:px-40 space-y-10">
//     <div className="space-y-5">
//       <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
//         You do the business, <br className="sm:block hidden" /> we’ll handle the money.
//       </h2>
//       <p className="max-w-md text-lg lg:text-xl">
//         With the right credit card, you can improve your financial life by
//         building credit, earning rewards and saving money. But with hundreds
//         of credit cards on the market.
//       </p>

//       <Button styles={`mt-10`} />
//     </div>

//     <div className="flex flex-col space-y-6">
//       {features.map((feature, index) => (
//         <FeatureCard key={feature.id} feature={feature} index={index} featuresLength={features.length} />
//       ))}
//     </div>
//   </section>
// );

// export default Business;
