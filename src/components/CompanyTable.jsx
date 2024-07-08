import React from 'react'
import Container from './Container'
import { MdArrowDropDown,MdOutlineSearch } from "react-icons/md";




const CompanyTable = () => {
  return (
    <div id='company' className="bg-[#F5F5F5] ">
<Container className="py-[60px] ">
        <div className="lg:mx-0 mx-[10px]">
        <div className=" bg-[#FFFFFF] lg:rounded-[20px] shadow-2xl ">
            <div className=" w-[95%] mx-auto lg:flex justify-between items-center lg:pt-[53px] pt-[15px] pb-[20px] lg:pb-[64px]">
                <div className="">
                <h2 className='lg:text-[48px] text-[24px] text-[#191618] font-natsreguler '>All Companies</h2>
                </div>
                <div className=" relative ">
                    <div className="flex">
                        <div className="absolute top-[53%] translate-y-[-50%] lg:left-[19px] left-[5px]">
                        < MdOutlineSearch className='lg:text-[25px]'/>
                        </div>
                    <div className="">
                    <input className='lg:h-[58px] lg:w-[588px] rounded-[10px] lg:pl-[52px] pl-[20px] lg:text-[24px]  text-[12px] font-natsreguler bg-[#DADADA]' type="text" placeholder='Search Companies' />
                    </div>
                    </div>
                </div>
            </div>
        <div class="relative overflow-x-auto shadow-md lg:rounded-[18px]">
            <table class="w-[95%] mx-auto text-sm text-left rtl:text-right text-[#000000]  dark:text-gray-400 mb-[20px]">
                <thead class="text-xs bg-[#FFFFFF] dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className='font-messinabold text-[16px]!' scope="col" class="px-6 py-2">
                        Company
                        </th>
                        <th  scope="col" class="px-6 py-3">
                        <div className="flex items-center">
                        <div className=" text-[14px]! font-messinalite">
                            Ticker
                        </div>
                        <div className="">
                        <MdArrowDropDown />
                        </div>
                        </div>
                        </th>
                        <th className=" text-[14px]! font-messinalite pl-[25px] " scope="col" class="px-6 py-3">
                        Vertical
                        </th>
                        <th className=" text-[14px]! font-messinalite text-center" scope="col" class="px-6 py-3 text-center">
                            Price
                        </th>
                        <th className=" text-[14px]! font-messinalite text-center" scope="col" class="px-6 py-3 text-center">
                        Market Cap ($B)
                        </th>
                        <th className=" text-[14px]! font-messinalite text-center" scope="col" class="px-6 py-3 text-center">
                        Revenue Growth
                        </th>
                        <th className=" text-[14px]! font-messinalite text-center" scope="col" class="px-6 py-3 text-center">
                        Gross Margin
                        </th>
                        <th className=" text-[14px]! font-messinalite text-center" scope="col" class="px-6 py-3 text-center">
                        EV/Revenue
                        </th>
                        <th className=" text-[14px]! font-messinalite text-center" scope="col" class="px-6 py-3 text-center">
                        YTD Performance
                        </th>
                        
                    </tr>
                </thead>


                <tbody>
                    <tr class="odd:bg-[#F3F3F3]  odd:dark:bg-gray-900 even:bg-gray-50 ">
                        <th scope="row" class="px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white font-natsreguler ">
                        Adyen
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        AFRM
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        Payments
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $17.15
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $50.5
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        49.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        15.8%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        6.3
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        24.3%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#FFFFFF]  odd:dark:bg-gray-900 even:bg-gray-50 ">
                        <th scope="row" class="px-6 py-2 font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        Affirm
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        AFRM
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        Lending
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $16.12
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $4.7
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        32.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        48.7%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        4.9
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        77.1%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#F3F3F3]  odd:dark:bg-gray-900 even:bg-gray-50 e">
                        <th scope="row" class="px-6 py-2  font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        Alkami Technology
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        ALKT
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        B2B SaaS
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $16.27
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $1.5
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        34.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        53.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        7.0
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        10.0%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#FFFFFF]  odd:dark:bg-gray-900 even:bg-gray-50 ">
                        <th scope="row" class="px-6 py-2  font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        AvidXchange
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        AVDX
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        Payments
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $10.21
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $2.0
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        27.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        61.5%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        6.0
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        10.5%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#F3F3F3]  odd:dark:bg-gray-900 even:bg-gray-50 e">
                        <th scope="row" class="px-6 py-2  font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        Bakkt Holdings
                        </th>
                        <td class="px-6 py-2 font-natsreguler" font-natsreguler>
                        BKKT
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        Wealth
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $1.32
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $0.1
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        38%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        --
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        0.4
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        13.8%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#FFFFFF]  odd:dark:bg-gray-900 even:bg-gray-50 ">
                        <th scope="row" class="px-6 py-2 font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        Virtu Financial Inc
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        VIRT
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        Wealth
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $17.0
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $3.1
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        -22.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        38.2%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        2.6
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        -17.8%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#F3F3F3]  odd:dark:bg-gray-900 even:bg-gray-50 e">
                        <th scope="row" class="px-6 py-2 font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        Adyen
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        AFRM
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        Payments
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $17.15
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $50.5
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        49.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        15.8%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        6.3
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        24.3%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#FFFFFF]  odd:dark:bg-gray-900 even:bg-gray-50 ">
                        <th scope="row" class="px-6 py-2 font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        Affirm
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        AFRM
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        Lending
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $16.12
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $4.7
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        32.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        48.7%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        4.9
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        77.1%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#F3F3F3]  odd:dark:bg-gray-900 even:bg-gray-50 e">
                        <th scope="row" class="px-6 py-2 font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        Alkami Technology
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        ALKT
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        B2B SaaS
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $16.27
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $1.5
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        34.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        53.0%
                        </td>
                        <td class="px-6 py-2font-natsreguler text-center">
                        7.0
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        10.0%
                        </td>
                    </tr>

                    <tr class="odd:bg-[#FFFFFF] pb-[10px]  odd:dark:bg-gray-900 even:bg-gray-50 ">
                        <th scope="row" class="px-6 py-2 font-natsreguler text-gray-900 whitespace-nowrap dark:text-white">
                        AvidXchange
                        </th>
                        <td class="px-6 py-2 font-natsreguler">
                        AVDX
                        </td>
                        <td class="px-6 py-2 font-natsreguler">
                        Payments
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        $10.21
                        </td>
                        <td class="px-6 py-2 font-natsreguler  text-center">
                        $2.0
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        27.0%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        61.5%
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        6.0
                        </td>
                        <td class="px-6 py-2 font-natsreguler text-center">
                        10.5%
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        </div>

        <div className="flex justify-center pt-[40px]">

            <div className="">
                <button className='lg:text-[16px] text-[11px] lg:py-[18px] py-[10px] lg:px-[19px] px-[10px] bg-[#2042B6]  rounded-[124px] text-[#fff] font-messinareguler hover:bg-[#fff] hover:text-[#2042B6] duration-300'>Download ‘All Companies’ Data</button>
            </div>
            <div className=" ml-[12px]">
                <button className='lg:text-[16px] text-[11px] lg:py-[18px] py-[10px] px-[31px] bg-[#2042B6]  rounded-[124px] text-[#fff] font-messinareguler hover:bg-[#fff] hover:text-[#2042B6] duration-300'>View Methodology</button>
            </div>

        </div>
        </div>
        
            </Container>
    </div>
  )
}

export default CompanyTable