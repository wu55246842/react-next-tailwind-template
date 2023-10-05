import React, { FC, ReactNode } from 'react';

interface ModalProps {
  title?: string;
  children: ReactNode;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({ title, children, modalOpen = false, setModalOpen }) => {
  return (
    <div className={`${modalOpen ? '' : 'hidden'}`}>
      {/* Input Toggle */}
      <input 
        value={String(modalOpen)}
        type="checkbox"
        checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)}
        className="modal-toggle"
      />

      {/* Modal */}
      <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="modal-box bg-white p-6 rounded-lg shadow-lg relative text-gray-900">

          {/* Close Button */}
          <button 
            onClick={() => setModalOpen(!modalOpen)}
            className="absolute top-4 right-4 bg-gray-300 p-2 rounded-full focus:outline-none focus:ring-2"
          >
            ✕
          </button>

          {/* Title */}
          <h3 className="text-lg font-bold mb-4">
            {title}
          </h3>
          
          {/* Children Content */}
          <div className="py-4">
            {children}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
