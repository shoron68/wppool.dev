import React from 'react'
import Container from './Container'
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div id='footer' className='bg-[#E6E6E6] pt-[58px] mx-[10px] lg:mx-0'>
            <Container>
                <div className="lg:w-[1180px] lg:mx-auto ">
                    <div className="lg:flex">
                        <div className="lg:w-[454px] w-full">
                            <h4 className='lg:text-[36px] text-[24px] lg:text-start text-center text-[#000000] leading-[136%] font-natsreguler '>Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.</h4>
                        </div>

                        <div className="lg:w-[84px] lg:ml-[130px] lg:pt-0 pt-[20px]">
                            <div className="w-full flex justify-between">

                            <div className="lg:w-[70%] w-[30%]">
                                <div className="">
                                    <p className='text-[20px] lg:w-[84px] text-[#9FA0A1] font-messinabold'>Jump to</p>
                                </div>
                                <div className="">
                                    <li className='text-[20px] lg:w-[84px] text-[#115CD9] pt-[16px] font-neue'><a href="#inedx">About Us</a></li>
                                    <li className='text-[20px] text-[#115CD9] pt-[16px] font-neue'><a href="#portfolio">Portfolio</a></li>
                                    <li className='text-[20px] text-[#115CD9] pt-[16px] font-neue'><a href="">News</a></li>
                                    <li className='text-[20px] text-[#115CD9] pt-[16px] font-neue'><a href="">Stories</a></li>
                                    <li className='text-[20px] text-[#115CD9] pt-[16px] font-neue'><a href="#stories">Jobs</a></li>
                                    <li className='text-[20px] text-[#115CD9] pt-[16px] font-neue'><a href=""></a></li>
                                </div>
                            </div>


                            <div className="lg:ml-[116px] w-[70%]  lg:w-[303px]">
                            <div className=" border-b-[1px] border-[#9FA0A1] lg:pb-[30px]">
                                <h3 className='lg:text-[20px] text-[16px] text-[#191618] font-messinabold'>Cambridge</h3>
                                <div className="w-[213px] h-[84px]">
                                    <span className='lg:text-[20px] text-[16px] leading-[140%] text-[#191618] font-messinareguler'>70728 Yost Burg,North Magdaleneview,UT 97952-2814</span>
                                </div>
                            </div>


                            <div className=" border-b-[1px] border-[#9FA0A1] lgpb-[30px]">
                                <h3 className='lg:text-[20px] text-[16px] text-[#191618] font-messinabold'>London</h3>
                                <div className="lg:w-[303px] lg:h-[56px]">
                                    <span className='lg:text-[20px] text-[16px] leading-[140%] text-[#191618] font-messinareguler'>Suite 292 903 Stehr Streets,
                                        Langworthtown, SC 94577-9465</span>
                                </div>
                            </div>


                            <div className=" border-b-[1px] border-[#9FA0A1] lg:pb-[30px]">
                                <h3 className='lg:text-[20px] text-[16px] text-[#191618] font-messinabold'>San Francisco</h3>
                                <div className="w-[238px] h-[84px]">
                                    <span className='lg:text-[20px] text-[16px] leading-[140%] text-[#191618] font-messinareguler'>19837 Gilberto Lodge,
                                        Lake Kendallville,
                                        Colorado - 97392, Bhutan</span>
                                </div>
                            </div>


                            <div className=" lg:pt-[24px]">
                                <div className="flex lg:justify-start justify-center">
                                    <div className="text-[30px] text-[#9FA0A1] pr-[21px]">
                                        <a href=""><FaLinkedin /></a>
                                    </div>
                                    <div className="text-[30px] text-[#9FA0A1]">
                                        <a href=""><FaTwitterSquare /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>

                        
                    </div>
                    <div className="lg:mt-[-40px] mt-[20px]">
                        <div className="">
                            <h6 className='text-[14px] lg:text-start text-center text-[#9FA0A1] font-messinabold'>©2024    Terms of Use    Privacy Policy</h6>
                        </div>
                        <div className="lg:w-[517px] pt-[10px]">
                            <p className='text-[14px] lg:text-start text-center text-[#000000] leading-[136%] font-messinareguler'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaera </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer