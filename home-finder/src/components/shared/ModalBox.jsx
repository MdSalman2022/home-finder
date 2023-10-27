import React from "react";

const ModalBox = ({ isModalOpen, setIsModalOpen, children }) => {
  if (isModalOpen === true) {
    return (
      <div>
        <div className="fixed z-[1000] inset-0 overflow-auto mx-5 md:mx-0 bg-blue-100 bg-opacity-20">
          <div className="flex items-center justify-center min-h-screen">
            <div
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="fixed inset-0 bg-[#1E1E1E] bg-opacity-50 transition-opacity"
              aria-hidden="true"
            ></div>
            <div className="relative bg-primary dark:bg-base-100 rounded-[8px] shadow-xl transform transition-all w-full sm:w-fit bg-white flex flex-wrap h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalBox;
