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
import icon_big from "../assets/drop_big.png"

const StateOfUsa = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    <div id='state' className='bg-[#F5F5F5] lg:pt-0 pt-[110px] '>
      <Container>

        <div className='relative lg:mx-0 mx-[10px]'>
          <div className='lg:pl-[32px] pl-[5px]'>
            <h2 className='lg:text-[48px] text-[24px] text-[#191618] font-natsreguler'>State of USA</h2>
            <div className="relative inline-block pb-[35px] ">
              <select name="2024" className=" drop_a_c_year lg:text-[40px] text-[24px] lg:h-[58px] h-[40px] w-[150px] lg:w-[200px] lg:leading-[42px] bg-[#2042B6] rounded-[124px] text-[#FFFFFF] font-natsreguler ">
                <option value="2023">2023 </option>
                <option value="2022">2022</option>
                <option value="2021">2021 </option>
                <option value="2020">2020</option>
              </select>
              <div class="pointer-events-none absolute lg:top-[27%] top-[17px] lg:right-[13px] right-[7px] flex items-center px-2 text-white">
                <img src={icon_big} className='lg:w-[95%] w-[75%] ' alt="Dropdown arrow " />
              </div>
            </div>
          </div>
          <div className=' absolute bottom-[-80px] lg:right-[150px]'>
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

            <div className=" absolute lg:bottom-[-10px] lg:right-[148px] right-[90px] ">
              <div className="lg:flex lg:justify-between lg:w-[100%] w-full lg:mx-0">
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
