import styles from "./style";
import Button from "./Button";
import { AiOutlineBug } from "react-icons/ai";

const CTA = () => (
  <div>
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className="ont-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Weaving Technology and Learning into a Cohesive Journey</h2>
        <p className={`${styles.paragraph}  mt-5`}>
          In the bustling realm of technology and education, [Your Company Name] sprouted from a seed of curiosity and an eagerness to enhance the learning experience for every individual. 
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <img 
            src="/img/layout/story_01.png" 
            alt="Story 01" 
            className="rounded-full w-[100px] h-[100px] object-cover border-4 border-white shadow-lg hover:shadow-2xl transition-transform transition-200 transform hover:scale-105 hover:border-pink-500"
        />
      </div>


    </section>

    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className="ont-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Merging Ideas with Reality</h2>
        <p className={`${styles.paragraph}  mt-5`}>
        to seamlessly integrate cutting-edge AI technology with an interactive and user-friendly platform that not only supports but enhances the learning journey of every user. In the light of seemingly insurmountable challenges
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <img 
            src="/img/layout/story_02.png" 
            alt="Story 02" 
            className="rounded-full w-[100px] h-[100px] object-cover border-4 border-white shadow-lg hover:shadow-2xl transition-transform transition-200 transform hover:scale-105 hover:border-pink-500"
        />
    </div>



    </section>

    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className="ont-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Bridging Learning and Technology</h2>
        <p className={`${styles.paragraph}  mt-5`}>
        Our AI Chat, document management, and easy-sharing features were engineered with a singular purpose: to cultivate a space where learning becomes an interactive and seamless experience.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <img 
            src="/img/layout/story_03.png" 
            alt="Story 03" 
            className="rounded-full w-[100px] h-[100px] object-cover border-4 border-white shadow-lg hover:shadow-2xl transition-transform transition-200 transform hover:scale-105 hover:border-pink-500"
        />
    </div>


    </section>

  </div>
);

export default CTA;