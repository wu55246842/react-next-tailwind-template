import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';
import styles from './style';

// Ensure to bind modal to your appElement
Modal.setAppElement('#root'); 



const GetStarted = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(false);  // true
    const closeModal = () => setIsModalOpen(false);

    const modalStyles = {
      content: {
          top: '50%',  
          left: '50%',
          width: '80%',  
          height: '90%',  
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,  
      }
  };
  

    return (
        <>
            <div 
                className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer
                    hover:scale-105
                    object-cover border-4 border-white shadow-lg hover:shadow-2xl transition-transform transition-200 transform hover:scale-105 hover:border-pink-500`}
                onClick={openModal}
            >
                <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                    <div className={`${styles.flexStart} flex-row`}>
                        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                            <span className="text-gradient">View</span>
                        </p>
                        
                        <img src='/img/layout/arrow-up.svg' className="w-[23px] h-[23px] object-contain" alt="" />
                    </div>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">Tutorial</span>
                    </p>
                </div>
            </div>
            
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                style={modalStyles}
                
            >
                <button onClick={closeModal}><AiOutlineCloseCircle></AiOutlineCloseCircle></button>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Mmr3_Uvoiew"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Modal>
        </>
    );
}

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default GetStarted;
