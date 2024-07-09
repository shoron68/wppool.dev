import React from 'react'
import Container from './Container'
import storiesimg from "../assets/stories.png"
import storiesimg1 from "../assets/stories1.png"
import storiesimg2 from "../assets/stories2.png"

const Stories = () => {
  return (
    <div id='stories' className="bg-[#F5F5F5] pt-[50px] lg:pt-0">

<Container>
        <div className="lg:w-[1180px]  lg:mx-auto mx-[10px]" >
        <div className="lg:pt-[193px] pt-[90px]">
            <div className="">
                <h2 className='lg:text-[48px] text-[24px] text-[#191618] font-natsreguler'>Stories & Ideas</h2>
                <span className='lg:text-[20px] text-[16px] text-[#191618] font-messinabook'>The latest news and updates</span>
            </div>
        </div>
        <div className=" ">
        <div className="pt-[62px] lg:pt-[100px] lg:flex justify-between">
            <div className="flex justify-center lg:justify-start">
            <div className=" lg:w-[380px]  bg-[#fff] rounded-[8px] relative  mr-[20px]" >
                <div className=" absolute lg:top-[-50px] top-[-30px] left-[10px]">
                    <img src={storiesimg} className='lg:w-full w-[50%]' alt="" />
                </div>
                <div className="lg:pt-[90px] pt-[40px] lg:pb-[20px] pb-[10px] lg:w-[323px] w-[150px] pl-[20px]">
                    <h4 className='lg:text-[14px] text-[10px] text-[#2042B6] font-messinareguler '>By: Sahabuddin Sagor</h4>
                    <p className='lg:text-[16px] text-[8px] text-[#191618] font-natsreguler'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                    <div className="lg:pt-[14px]">
                    <button className='lg:py-[10px] py-[5px] px-[7px] lg:px-[12px] rounded-[124px] border-[1px] bg-[#2042B6] lg:text-[16px] text-[8px]  text-[#fff] hover:bg-[#fff] hover:border-[#2042B6] hover:text-[#2042B6] duration-300' >Read More</button>
                    </div>
                </div>
            </div>
            <div className=" lg:w-[380px] bg-[#fff] rounded-[8px] relative " >
                <div className="absolute lg:top-[-50px] top-[-30px] left-[10px]">
                    <img src={storiesimg1} className='lg:w-full w-[50%]' alt="" />
                </div>
                <div className="lg:pt-[90px] pt-[40px] lg:pb-[20px] pb-[10px] lg:w-[323px] w-[150px] pl-[20px]">
                    <h4 className='lg:text-[14px] text-[10px] text-[#2042B6] font-messinareguler '>By: Nayem Khan</h4>
                    <p className='lg:text-[16px] text-[8px] text-[#191618] font-natsreguler'>Lorem ipsum dolor sit amet consectetur</p>
                    <div className="lg:pt-[35px] pt-[12px]">
                    <button className='lg:py-[10px] py-[5px] px-[7px] lg:px-[12px] rounded-[124px] border-[1px] bg-[#2042B6] lg:text-[16px] text-[8px]  text-[#fff] hover:bg-[#fff] hover:border-[#2042B6] hover:text-[#2042B6] duration-300' >Read More</button>
                    </div>
                </div>
            </div>
            </div>

            <div className="pt-[50px] lg:pt-0 flex justify-center">
            <div className="lg:w-[380px] w-[150px] bg-[#fff] rounded-[8px] relative" >
                <div className=" absolute lg:top-[-50px] top-[-30px] left-[10px]">
                    <img src={storiesimg2}  className='lg:w-full w-[50%]' alt="" />
                </div>
                <div className="lg:pt-[90px] pt-[40px] lg:pb-[20px] pb-[10px] lg:w-[323px] w-[150px] pl-[20px]">
                    <h4 className='lg:text-[14px] text-[10px] text-[#2042B6] font-messinareguler '>By: Sahabuddin Sagor</h4>
                    <p className='lg:text-[16px] text-[8px] text-[#191618] font-natsreguler'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                    <div className="lg:pt-[14px]">
                    <button className='lg:py-[10px] py-[5px] px-[7px] lg:px-[12px] rounded-[124px] border-[1px] bg-[#2042B6] lg:text-[16px] text-[8px]  text-[#fff] hover:bg-[#fff] hover:border-[#2042B6] hover:text-[#2042B6] duration-300' >Read More</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="pt-[50px] pb-[40px] lg:pt-[100px] lg:flex justify-between">
            <div className="flex justify-center lg:justify-start">
            <div className=" lg:w-[380px]  bg-[#fff] rounded-[8px] relative  mr-[20px]" >
                <div className=" absolute lg:top-[-50px] top-[-30px] left-[10px]">
                    <img src={storiesimg} className='lg:w-full w-[50%]' alt="" />
                </div>
                <div className="lg:pt-[90px] pt-[40px] lg:pb-[20px] pb-[10px] lg:w-[323px] w-[150px] pl-[20px]">
                    <h4 className='lg:text-[14px] text-[10px] text-[#2042B6] font-messinareguler '>By: Sahabuddin Sagor</h4>
                    <p className='lg:text-[16px] text-[8px] text-[#191618] font-natsreguler'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                    <div className="lg:pt-[14px]">
                    <button className='lg:py-[10px] py-[5px] px-[7px] lg:px-[12px] rounded-[124px] border-[1px] bg-[#2042B6] lg:text-[16px] text-[8px]  text-[#fff] hover:bg-[#fff] hover:border-[#2042B6] hover:text-[#2042B6] duration-300' >Read More</button>
                    </div>
                </div>
            </div>
            <div className=" lg:w-[380px] bg-[#fff] rounded-[8px] relative " >
                <div className="absolute lg:top-[-50px] top-[-30px] left-[10px]">
                    <img src={storiesimg1} className='lg:w-full w-[50%]' alt="" />
                </div>
                <div className="lg:pt-[90px] pt-[40px] lg:pb-[20px] pb-[10px] lg:w-[323px] w-[150px] pl-[20px]">
                    <h4 className='lg:text-[14px] text-[10px] text-[#2042B6] font-messinareguler '>By: Nayem Khan</h4>
                    <p className='lg:text-[16px] text-[8px] text-[#191618] font-natsreguler'>Lorem ipsum dolor sit amet consectetur</p>
                    <div className="lg:pt-[35px] pt-[12px]">
                    <button className='lg:py-[10px] py-[5px] px-[7px] lg:px-[12px] rounded-[124px] border-[1px] bg-[#2042B6] lg:text-[16px] text-[8px]  text-[#fff] hover:bg-[#fff] hover:border-[#2042B6] hover:text-[#2042B6] duration-300' >Read More</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="pt-[50px] lg:pt-0 flex justify-center">
            <div className="lg:w-[380px] w-[150px] bg-[#fff] rounded-[8px] relative" >
                <div className=" absolute lg:top-[-50px] top-[-30px] left-[10px]">
                    <img src={storiesimg2}  className='lg:w-full w-[50%]' alt="" />
                </div>
                <div className="lg:pt-[90px] pt-[40px] lg:pb-[20px] pb-[10px] lg:w-[323px] w-[150px] pl-[20px]">
                    <h4 className='lg:text-[14px] text-[10px] text-[#2042B6] font-messinareguler '>By: Sahabuddin Sagor</h4>
                    <p className='lg:text-[16px] text-[8px] text-[#191618] font-natsreguler'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                    <div className="lg:pt-[14px]">
                    <button className='lg:py-[10px] py-[5px] px-[7px] lg:px-[12px] rounded-[124px] border-[1px] bg-[#2042B6] lg:text-[16px] text-[8px]  text-[#fff] hover:bg-[#fff] hover:border-[#2042B6] hover:text-[#2042B6] duration-300' >Read More</button>
                    </div>
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

export default Stories