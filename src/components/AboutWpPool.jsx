import React from 'react'
import Container from './Container'
import aboutimg from "../assets/about.png"

const AboutWpPool = () => {
  return (
    <div id='about' className='bg-[#F5F5F5] lg:pt-[120px] lg:mx-0 mx-[10px]'>
        <div className="lg:w-[1180px]  mb-[80px] mx-auto"></div>
        <Container>
            <div className="bg-[#fff] rounded-[12px] lg:w-[1180px] lg:mx-auto ">
                <div className="lg:flex justify-between">
                    <div className="lg:w-[628px] lg:pl-[72px] py-[78px]">
                        <h2 className='lg:text-[38px] text-[24px] text-[#191618] font-natsreguler'>About WPPOOL</h2>
                        <span className='lg:text-[30px] text-[20px] text-[#7D7F81] pt-[20px] font-natsreguler '>Investing in wppool for over 50 years</span>
                        <p className='pt-[16px] lg:text-[16px] text-[14px] lg:w-[622px] text-[#191618] font-messinabook'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi  <u>repudiandae</u> consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.</p>
                        <div className="lg:pt-[30px]  pt-[15px] lg:block flex justify-center">
                            <button className=' shadow-2xl py-[18px] px-[16px] rounded-[124px] bg-[#2042B6] text-[#FFF] font-messinareguler  hover:bg-[#fff] hover:border-[#2042B6] border-[1px] hover:text-[#2042B6] duration-300'>Contact WPPOOL</button>
                        </div>
                    </div>

                    <div className="lg:pt-[40px] lg:block flex justify-center">
                        <img src={aboutimg}  className='lg:w-full'  alt="" />
                    </div>
                </div>
            </div>
            <div className="lg:w-[1180px] border-b-[2px] border-[#90B8F0] mt-[100px] mx-auto"></div>
        </Container>
    </div>
  )
}

export default AboutWpPool