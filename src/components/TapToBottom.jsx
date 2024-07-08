import React, { useEffect } from 'react';
import { IoArrowDown } from "react-icons/io5";

const TapToBottom = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToBottomBtn.style.display = 'none';
      } else {
        scrollToBottomBtn.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="scrollToBottomBtn"
      onClick={handleToBottom}
      className="lg:p-[24px] p-[20px] rounded-full bg-[#FFFFFF] shadow-xl flex justify-center items-center duration-500 ease-in-out fixed right-[30px] bottom-[55px] cursor-pointer"
      style={{ display: 'none' }}
    >
      <IoArrowDown className='text-[20px] text-[#2042B6] animate-moveUpDown'/>
    </div>
  );
};

export default TapToBottom;
