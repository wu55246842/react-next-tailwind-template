import React from 'react'
import Button from './Button'
import GetStarted from './GetStarted'
import styles from './style'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}` }>
      <div className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='h-10'></div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            <span className="text-gradient">Interactive AI Chat for</span> {" "} 

          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted/>
          </div>
        </div>
        <h1  className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"> 
         Engaging Learning</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology
          to Discuss and explore your learning materials with our smart AI, 
          designed to understand the context of your study materials..
        </p>
        <div className='flex justify-start space-x-10'>

          <Button styles={`mt-10`} text="Sign In" href="/auth/signin"/>
          <Button styles={`mt-10`} text="Let's Start" href="/admin/default"/>

        </div>
        

      </div>


      <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  mt-3 mb-10 relative`}>
        <img src='/img/layout/robot.png' className="w-full h-auto relative z-[2]" alt="A description of the image" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero