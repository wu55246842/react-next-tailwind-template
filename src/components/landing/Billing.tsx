// Billing.tsx

import React from 'react';
import Button from './Button';
import styles, { layout } from "./style";


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src="/img/layout/kids-160168_1280.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Meet the Team Behind <br className="sm:block hidden" /> 
        <p className='text-lg'>United for the Future of Learning</p>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        
        Our team is composed of passionate EdTech specialists, developers, and educators who are collectively dedicated to enhancing learning experiences through technological innovations
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles={`mt-10`} text="More..."/>
      </div>
    </div>
  </section>
);


export default Billing;
