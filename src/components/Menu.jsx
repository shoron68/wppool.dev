import React, { useState, useEffect } from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { IoShareSocial } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo2 from "../assets/logo2.png"


const Menu = () => {
    let [cateShow, setCateShow] = useState(false)
    let [cateShow2, setCateShow2] = useState(false)
    let [show, setShow] = useState(false)


    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])


    return (
        <div className=" lg:pt-[10px] pt-0 bg-[#2042B6] ">

            {show ?
                <Container className="fixed z-40 left-[50%] translate-x-[-50%] bg-[#F3F3F3] rounded-[18px] shadow-xl">
                    <div className=" mx-auto py-[12px] rounded-[18px]">
                        <div className="lg:flex items-center lg:justify-between">
                            <div className="lg:w-[20%] w-full pl-[10px]">
                                <img className='mx-auto lg:mx-0' src={logo2} alt="Logo" />
                            </div>
                            <div className="lg:w-[24%] w-full">
                                {cateShow &&
                                    <div className="w-[350px] pt-[30px] pb-[38px] pl-[20px] bg-[#FFFFFF] absolute top-[-5px] right-[-35px] rounded-[18px] z-50">
                                        <div className="flex items-center">
                                            <div className=" p-[16px] border-[2px] rounded-full text-[#fff] bg-[#AFCD80] text-[21px] ">
                                                <IoShareSocial />
                                            </div>
                                            <div className="">
                                                <button className='py-[17px] px-[16px] border-[2px] bg-[#2042B6] rounded-[40px] mr-[24px] text-[#fff]  text-[12px] font-messinareguler'>Download the 2024 Report</button>
                                            </div>
                                            <div onClick={() => setCateShow(!cateShow)} className="ml-[-10px]">
                                                <RxCross2 className='text-[#191618] text-[25px]' />
                                            </div>
                                        </div>

                                        <div className="">
                                            <ul>
                                                <li  className='text-[18px] font-messinareguler text-[#191618] pt-[33px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#inedx">The WPPOOL Index</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#company">All Companies</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'> <a href="#potential">Potential Future Listings</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#state">State of USA</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#stories">Stories & Ideas</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#about">About WPPOOL</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] scroll-smooth hover:text-[#2042B6] duration-300 cursor-pointer'>
                                                    <a href="#portfolio">WPPOOL Portfolio Companies</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#footer">Visit WPPOOL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                }

                                <div className="flex items-center lg:justify-end justify-center pt-[10px] lg:pt-0 mr-[10px]">
                                    <div className="lg:p-[14px] p-[10px] mr-[12px] border-[2px] border-[#AFCD80] rounded-full text-[21px] text-[#191618] cursor-pointer hover:bg-[#AFCD80] duration-500">
                                        <IoShareSocial />
                                    </div>
                                    <div className="lg:py-[17px] py-[12px] lg:px-[16px] px-[12px] border-[2px] border-[#115CD9] rounded-[40px] mr-[24px] hover:bg-[#115CD9] hover:text-[#fff] text-[#191618] text-[12px] font-messinareguler duration-500">
                                        <button>Download the 2024 Report</button>
                                    </div>
                                    <div className="text-[21px] text-[#191618]">
                                        <div onClick={() => setCateShow(!cateShow)} className="text-[21px] text-[#191618]">
                                            <FaBars />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>


                :



                <Container className="fixed z-40 left-[50%] translate-x-[-50%] bg-[#2042B6]">
                    <div className="">
                        <div className="lg:flex lg:justify-between items-center py-[10px] ">
                            <div className="lg:w-[20%] w-full">
                                <img className='mx-auto lg:mx-0' src={logo} alt="" />
                            </div>
                            <div className="lg:w-[24%] w-full  ">

                            {cateShow &&
                                    <div className="w-[350px] pt-[30px] pb-[38px] pl-[20px] bg-[#FFFFFF] absolute top-[-5px] right-[-35px] rounded-[18px] z-50">
                                        <div className="flex items-center ">
                                            <div className=" p-[16px] border-[2px] rounded-full text-[#fff] bg-[#AFCD80] text-[21px] mr-[12px]">
                                                <IoShareSocial />
                                            </div>
                                            <div className="">
                                                <button className='py-[17px] px-[16px] border-[2px] bg-[#2042B6] rounded-[40px] mr-[24px] text-[#fff]  text-[12px] font-messinareguler'>Download the 2024 Report</button>
                                            </div>
                                            <div onClick={() => setCateShow(!cateShow)} className="ml-[-10px]">
                                                <RxCross2 className='text-[#191618] text-[25px]' />
                                            </div>
                                        </div>

                                        <div className="">
                                        <ul>
                                                <li  className='text-[18px] font-messinareguler text-[#191618] pt-[33px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#inedx">The WPPOOL Index</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#company">All Companies</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'> <a href="#potential">Potential Future Listings</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#state">State of USA</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#stories">Stories & Ideas</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#about">About WPPOOL</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] scroll-smooth hover:text-[#2042B6] duration-300 cursor-pointer'>
                                                    <a href="#portfolio">WPPOOL Portfolio Companies</a></li>
                                                <li className='text-[18px] font-messinareguler text-[#191618] pt-[24px] hover:text-[#2042B6] duration-300 cursor-pointer scroll-smooth'><a href="#footer">Visit WPPOOL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                }




                                <div className="flex  items-center justify-center pt-[5px] lg:pt-0">
                                    <div className=" lg:p-[14px] p-[10px] border-[2px] rounded-full text-[#fff] text-[21px] mr-[12px]">
                                        <IoShareSocial />
                                    </div>
                                    <div className="">
                                        <button className='lg:py-[17px] py-[12px] lg:px-[16px] px-[12px] border-[2px]  rounded-[40px] mr-[24px] text-[#fff]  text-[12px] font-messinareguler'>Download the 2024 Report</button>
                                    </div>
                                    <div onClick={() => setCateShow(!cateShow)} className="text-[21px] text-[#fff]">
                                        <FaBars />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            }




        </div>
    )
}

export default Menu