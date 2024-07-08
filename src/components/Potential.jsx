import React from 'react'
import Container from './Container'
import group from "../assets/group.png"
import group2 from "../assets/group2.png"
import group3 from "../assets/group3.png"
import group4 from "../assets/group4.png"
import group5 from "../assets/group5.png"
import group6 from "../assets/group6.png"
import group7 from "../assets/group7.png"
import group8 from "../assets/group8.png"
import group9 from "../assets/group9.png"
import group10 from "../assets/group10.png"

const Potential = () => {
  return (
        <div id='potential' className="bg-[#F5F5F5] ">
    <Container>
        <div className="lg:w-[1180px] lg:mx-auto mx-[10px]">
        <div className="lg:pt-[151px] pt-[50px] lg:pb-[155px] pb-[50px]">
          <div className=" pb-[26px]">
            <h2 className='lg:text-[48px] text-[24px] text-[#191618] pb-[18px] font-natsreguler'>Potential Future Listings</h2>
            <p className='lg:text-[16px] text-[12px] text-[#191618] font-messinabook'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
          </div>
        <div className="lg:static relative">
        <div className="lg:flex justify-between">
            <div className="flex justify-center">
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px] mr-[20px] ">
                <img  src={group} className=' w-[50%]' alt="" />
            </div>
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px] ">
                <img  src={group2} className='lg:w-[60%] w-[50%]' alt="" />
            </div>
            </div>
            <div className="flex justify-center lg:pt-0 pt-[15px]"> 
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px] mr-[20px]  ">
                <img  src={group3} className='lg:w-[65%] w-[50%]' alt="" />
            </div>
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px] ">
                <img  src={group4} className='lg:w-[90%] w-[50%]' alt="" />
            </div>
            </div>
            <div className=" flex justify-center pt-[20px]">
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px] ">
                <img  src={group5} className='lg:w-[65%] w-[50%]' alt="" />
            </div>
            </div>
        </div>


        <div className="lg:flex lg:justify-between pt-[20px]">
            <div className=" flex justify-center">
                <div className="lg:w-[220px] mr-[20px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px]  ">
                <img  src={group6} className='lg:w-[60%] w-[50%]' alt="" />
            </div>
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px]  ">
                <img  src={group7} className='lg:w-[40%] w-[50%]' alt="" />
            </div>

            </div>


            <div className="flex justify-center pt-[20px] lg:pt-0 ">
            
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px] mr-[20px]  ">
                <img  src={group8} className='lg:w-[60%] w-[50%]' alt="" />
            </div>
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px]  ">
                <img  src={group9} className='lg:w-[55%] w-[50%]' alt="" />
            </div>
            </div>


            <div className="flex justify-center lg:pt-0 pt-[20px]">
            
            <div className="lg:w-[220px] w-[120px] lg:h-[120px] h-[60px] flex justify-center items-center bg-[#fff] rounded-[6px] ">
                <img src={group10} className='lg:w-[55%] w-[50%]' alt="" />
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </Container>
        </div>
  )
}

export default Potential