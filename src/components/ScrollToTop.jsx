import React, { useEffect } from 'react';
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 350) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="scrollToTopBtn"
      onClick={handleToTop}
      className="lg:p-[24px] p-[20px] rounded-full bg-[#FFFFFF] shadow-xl flex justify-center items-center duration-500 ease-in-out fixed right-[30px] bottom-[55px] cursor-pointer"
      style={{ display: 'none' }}
    >
      <IoMdArrowUp className='text-[20px] text-[#2042B6] animate-moveDownUp'/>
    </div>
  );
};

export default ScrollToTop;
