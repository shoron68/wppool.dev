import React from 'react'
import Container from './Container'
import img from "../assets/bnrbg2.png"
import arrow from "../assets/arrow.png"

const Banner = () => {
  return (

<div className="bg-[#2042B6] lg:pt-0 pt-[100px] overflow-hidden ">
    <Container>
    <div className="lg:flex lg:pt-[200px] pb-[50px] lg:mx-0 mx-[20px] py-[30px]">
    <div className="lg:w-[30%] w-full">
    <div className=" lg:items-center items-start  lg:block flex justify-between lg:pt-0 pt-[270px] lg:mt-0 mt-[35px]">

<div className="lg:w-[10%] w-[15%]">
    <h2 className='lg:text-[36px] text-[22px] text-[#fff] font-natsreguler lg:text-start text-center '>60</h2>
    <h4 className='lg:text-[16px] text-[10px] text-[#fff] font-neue lg:text-start text-center'>Companies</h4>
</div>
<div className="lg:py-[50px] lg:w-[28%] w-[25%]">
    <h2 className='lg:text-[36px] text-[22px] text-[#fff] font-natsreguler lg:text-start text-center'>$100B</h2>
    <h4 className='lg:text-[16px] text-[10px] text-[#fff] font-neue lg:text-start text-center'>Market cap</h4>
</div>
<div className=" lg:w-[33%] w-[25%]">
    <h2 className='lg:text-[36px] text-[22px] text-[#fff] font-natsreguler lg:text-start text-center'>3.5x</h2>
    <h4 className='lg:text-[16px] text-[10px] text-[#fff] font-neue lg:text-start text-center'>Revenue multiple</h4>
</div>
<div className="lg:pt-[50px] lg:pb-[40px] lg:w-[57%] w-[25%]">
    <h2 className='lg:text-[36px] text-[22px] text-[#fff] font-natsreguler lg:text-start text-center'>60%</h2>
    <h4 className='lg:text-[16px] text-[10px] text-[#fff] font-neue lg:text-start text-center'>LTM avg. revenue growth rate</h4>
</div>
</div>
    </div>

    
    <div className="lg:w-[70%] w-full">
    <div className=" flex justify-center lg:relative">
    <div className="absolute lg:top-[-80px] top-[120px] lg:ml-0 lg:left-0 left-[30px]">
            <img src={img} className='lg:w-full w-[70%] ml-[30px] lg:ml-0 '  alt="" />
        </div>
        
        <div className=" absolute lg:top-0 top-[110px] left-0 flex justify-center items-center  lg:mr-[185px] lg:mt-[-110px]">
            <img src={arrow} className='lg:w-full w-[70%] lg:mx-0 mx-auto' alt="" />
        </div>
        
        <div className="flex justify-center  absolute lg:top-0 top-0 left-0 lg:left-[-20px] lg:z-10 ">
        <div className="lg:pt-[80px] pt-[180px]">
            <h1 className='lg:text-[79px] text-[30px] lg:text-start text-center  text-[#fff] font-natsreguler'>The WPPOOL Index</h1>
            <p className='lg:text-[21px] text-[16px] lg:text-start text-center text-[#fff] font-messinabook'>Monitor the performance of emerging, publicly traded, financial technology companies</p>
        </div>
        </div>
    </div>
    </div>
        </div>
        
    </Container>
</div>

  )
}

export default Banner