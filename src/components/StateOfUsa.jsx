import React from 'react';
import Container from './Container';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import bgimg from '../assets/usabg.png';
import sliderimg from '../assets/slider.png';
import sliderimg1 from '../assets/slider1.png';
import sliderimg2 from '../assets/slider2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StateOfUsa = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute lg:bottom-[0px] bottom-[-34px] text-[#2042B6] lg:left-[110px] left-[50px] lg:text-[30px] text-[20px] cursor-pointer lg:h-[56px] h-[28px] w-[28px] lg:w-[56px] flex justify-center rounded-full bg-[#fff] shadow-xl' onClick={onClick}>
        <IoIosArrowRoundForward className='absolute top-[50%] transform -translate-y-1/2' />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute lg:bottom-[0px] bottom-[-34px] text-[#2042B6] lg:h-[56px] h-[28px] w-[28px] lg:w-[56px] flex justify-center rounded-full bg-[#fff] lg:left-[35px] left-[15px] z-10 lg:text-[30px] text-[20px] cursor-pointer shadow-xl' onClick={onClick}>
        <IoIosArrowRoundBack className='absolute top-[50%] transform -translate-y-1/2' />
      </div>
    );
  }

  return (
    <div id='state' className='bg-[#F5F5F5] lg:mx-0 mx-[10px]'>
      <Container>
        
        <div className='relative'>
          <div className=''>
            <h2 className='lg:text-[48px] text-[24px] text-[#191618] font-natsreguler'>State of USA</h2>
            <select className='lg:w-[200px] lg:h-[58px] leading-[26px] lg:text-[34px] text-[14px] bg-[#2042B6] rounded-[124px] pt-0 pb-0 px-[10px] text-[#FFFFFF] font-natsreguler' name='year' id='year'>
              <option value='2024'>2024</option>
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
            </select>
          </div>
          <div className=' absolute bottom-[-80px] lg:right-0'>
            <img src={bgimg} className='lg:w-full w-[80%]' alt='' />
          </div>

          <div className='pt-[61px] relative'>
            <Slider {...settings}>
              <div className=''>
                <img src={sliderimg} alt='' />
              </div>
              <div className=''>
                <img src={sliderimg1} alt='' />
              </div>
              <div className=''>
                <img src={sliderimg2} alt='' />
              </div>
            </Slider>

            <div className=" absolute lg:bottom-[-10px] lg:left-[195px]">
              <div className="lg:flex lg:justify-between lg:w-[100%] w-full lg:mx-0 mx-[50%] ">
                <div className="flex items-center justify-center ">
                  <div className="">
                    <p className='lg:text-[16px] text-[12px] text-[#191618] font-messinareguler'>Pages</p>
                  </div>
                  <div className=" px-[10px]">
                    <select className=' lg:h-[58px] h-[40px]  lg:w-[120px] bg-[#fff] shadow-xl border-none rounded-[124px]' name="" id="">
                      <option className='' value="">1 and 2</option>
                      <option value="">3 and 4</option>
                    </select>
                  </div>
                  <div className="">
                    <p className='lg:text-[16px] text-[12px] text-[#191618] font-messinareguler'>Of 37</p>
                  </div>
                </div>

                <div className="lg:ml-[585px] lg:mt-0 mt-[15px] lg:static flex justify-center">
                  <div className="">
                    <button className='lg:py-[23px] py-[10px] lg:px-[20px] px-[10px] border-[2px] lg:text-[16px] text-[12px] font-messinareguler rounded-[124px] text-[#fff] bg-[#2042B6] hover:bg-[#fff] hover:text-[#2042B6] duration-500 ease-in-out hover:border-[#2042B6]'>Download the 2023 Report</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StateOfUsa;
