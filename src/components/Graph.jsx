import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import { FiPlus } from "react-icons/fi";
import union from "../assets/Union.png";
import Container from './Container';
import { RxMinus } from "react-icons/rx";
import icon from "../assets/drop.png"


const Graph = () => {
  const [show, setShow] = useState(false);
  const [activeBtn, setActiveBtn] = useState('1Y');

  const data = [
    ['month', 'WPPOOL', 'Google', 'Microsoft', 'Twitter'],
    ['February', 0, 0, 0, 0],
    ['March', 50, 10, 60, 6],
    ['April', 32, 7, 43, 16],
    ['May', 18, 10, 5, 4],
    ['June', 78, 38, 19, 37],
    ['July', 10, 60, 40, 20],
    ['August', 11, 44, 5, 30],
  ];

  const options = {
    legend: { position: 'bottom' },
    series: {
      0: { color: 'red' },
      1: { color: 'blue' },
      2: { color: 'green' },
      3: { color: 'purple' },
    },
    hAxis: { format: 'MMM dd, yyyy' },
    vAxis: { minValue: 0, maxValue: 100 },
    tooltip: { isHtml: true },
    curveType: 'function',
    pointSize: 5,
  };



  return (
    <div id='inedx' className="bg-[#F5F5F5] pt-[60px] lg:mx-0 mx-[10px]" >
      <Container>
        <div className="bg-[#FFFFFF] pt-[20px]">


          <div className="w-[98%] mx-auto">
            <div className="lg:flex pt-[50px] lg:justify-between relative">
              <div className="lg:w-[20%] ">
                <div className="bg-[#EFF3F6] lg:h-[550px] lg:top-[0px] top-[90px] px-[10px] py-[10px] absolute z-20">
                  <div className="flex">
                    <div onClick={() => setShow(!show)} className="lg:py-[12px] py-[5px] pl-[10px] pr-[60px] lg:pr-[128px] text-[#fff] bg-[#115CD9] border-[2px] hover:bg-[#fff] hover:text-[#191618] duration-300 rounded-[6px] cursor-pointer">
                      <h4 className='lg:text-[16px] text-[12px] font-natsreguler'>The Index</h4>
                    </div>
                    {show ? <div className=" absolute lg:top-[5%] top-[11%] lg:text-[16px] text-[12px] lg:right-[12px] right-[20px] text-[#fff] hover:text-[#191618]">
                      <RxMinus />
                    </div> : <div className=" absolute lg:top-[5%] top-[38%] lg:text-[16px] text-[12px] right-[12px] text-[#fff] hover:text-[#191618]">
                      <FiPlus />
                    </div>}
                  </div>
                  {show &&
                    <div className="lg:pt-[21px] pt-[10px]">
                      <div className="flex lg:justify-between items-center hover:bg-[#115CD9] duration-300 rounded-[6px] hover:text-[#fff] text-[#647888] cursor-pointer">
                        <li className='lg:text-[16px] text-[12px] font-natsreguler lg:py-[12px] py-[5px] lg:pl-[10px] pl-[3px] rounded-[6px] '>The Index Tab Two</li>
                        < FiPlus className='lg:text-[16px] text-[12px] pl-[2px]' />
                      </div>
                      <div className="flex justify-between items-center hover:bg-[#115CD9] duration-300 mt-[6px] rounded-[6px] hover:text-[#fff] text-[#647888] cursor-pointer ">
                        <li className='lg:text-[16px] text-[12px] font-natsreguler lg:py-[12px] py-[5px] lg:pl-[10px] pl-[3px] rounded-[6px]'>The Index Tab Three</li>
                        <FiPlus className='lg:text-[16px] text-[12px] pl-[2px]' />
                      </div>
                      <div className="flex justify-between items-center hover:bg-[#115CD9] duration-300 mt-[6px] rounded-[6px] hover:text-[#fff] text-[#647888] cursor-pointer">
                        <li className='lg:text-[16px] text-[12px] font-natsreguler lg:py-[12px] py-[5px] lg:pl-[10px] pl-[3px] rounded-[6px]'>The Index Tab Four</li>
                        <FiPlus className='lg:text-[16px] text-[12px] pl-[2px]' />
                      </div>
                      <div className="flex justify-between items-center hover:bg-[#115CD9] duration-300 mt-[6px] rounded-[6px] hover:text-[#fff] text-[#647888] cursor-pointer">
                        <li className='lg:text-[16px] text-[12px] font-natsreguler lg:py-[12px] py-[5px] lg:pl-[10px] pl-[3px] rounded-[6px]'>The Index Tab Five</li>
                        <FiPlus className='lg:text-[16px] text-[12px] pl-[2px]' />
                      </div>
                    </div>
                  }

                </div>
              </div>

              <div className="lg:w-[77%] w-full">
                <div className="flex items-center">
                  <div className="">
                    <img src={union} className='lg:w-full w-[60%]' alt="Union" />
                  </div>
                  <div className="lg:ml-0 ml-[-15px]">
                    <h2 className='lg:text-[36px] text-[22px] text-[#191618] font-natsreguler'>The WPPOOL Index</h2>
                  </div>
                </div>

                <div className="lg:flex lg:pt-[32px] pt-[80px] pb-[21px] ">
                  <div className=" flex">
                    <div className="lg:py-[14px] py-[10px] bg-[#ededed] rounded-[6px]">
                      <div className="flex justify-between items-center lg:w-[210px] mx-[7px]">
                        <div className="w-[30%] pr-[40px] ">
                          <h3 className='lg:text-[30px] text-[16px] text-[#FC714D] font-natsreguler'>+66.2%</h3>
                        </div>
                        <div className="w-[29%]">
                          <h4 className='lg:text-[12px] text-[8px] font-messinareguler text-[#191618] lg:leading-[120%] lg:border-r-[5px] border-r-[2px] border-[#FC714D] ' >WPPOOL Index</h4>
                        </div>
                      </div>
                    </div>


                    <div className="lg:py-[14px] py-[10px] bg-[#ededed] rounded-[6px] lg:mx-[20px] mx-[10px]">
                      <div className="flex justify-between items-center lg:w-[210px] mx-[7px]">
                        <div className="w-[30%] pr-[40px] ">
                          <h3 className='lg:text-[30px] text-[16px] text-[#615DE3] font-natsreguler'>+26.6%</h3>
                        </div>
                        <div className="w-[29%]">
                          <h4 className='lg:text-[12px] text-[8px] font-messinareguler text-[#191618] lg;leading-[120%] lg:border-r-[5px] border-r-[2px] border-[#615DE3] ' >WPPOOL Index</h4>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className=" flex lg:pt-0 pt-[20px]">
                    <div className="lg:py-[14px] py-[10px] bg-[#ededed] rounded-[6px]">
                      <div className="flex justify-between items-center lg:w-[210px] mx-[7px]">
                        <div className="w-[30%] pr-[40px] ">
                          <h3 className='lg:text-[30px] text-[16px] text-[#7CA63A] font-natsreguler'>+66.2%</h3>
                        </div>
                        <div className="w-[29%]">
                          <h4 className='lg:text-[12px] text-[8px] font-messinareguler text-[#191618] lg:leading-[120%] lg:border-r-[5px] border-r-[2px] border-[#7CA63A] ' >Microsoft Index</h4>
                        </div>
                      </div>
                    </div>


                    <div className="lg:py-[14px] py-[10px] bg-[#ededed] rounded-[6px] lg:mx-[20px] mx-[10px]">
                      <div className="flex justify-between items-center lg:w-[210px] mx-[7px]">
                        <div className="w-[30%] pr-[40px] ">
                          <h3 className='lg:text-[30px] text-[16px] text-[#6F34A1] font-natsreguler'>+26.6%</h3>
                        </div>
                        <div className="w-[29%]">
                          <h4 className='lg:text-[12px] text-[8px] font-messinareguler text-[#191618] lg;leading-[120%] lg:border-r-[5px] border-r-[2px] border-[#6F34A1] ' >Twitter Index</h4>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>



                <div className="lg:flex justify-between">
                  <div className="flex justify-between lg:pb-0 pb-[20px]">
                    <div className="w-[40%] lg:flex">
                      <div class="relative inline-block w-[174px] h-[26px]">
                        <select name="Types of IPO" class="drop_a_c appearance-none w-full h-full pl-[10px] pr-[30px] text-[12px] bg-[#2042B6] rounded-[124px] text-[#FFFFFF] font-messinareguler ">
                        <option value="Types of IPO ">Types of IPO </option>
                          <option value="Types of IPO ">Types of IPO </option>
                          <option value="Types of IPO ">Types of IPO </option>
                          <option value="Types of IPO ">Types of IPO </option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                          <img src={icon} alt="Dropdown arrow" class="w-4 h-4" />
                        </div>
                      </div>

                      <div className="lg:pl-[18px] lg:pt-0 pt-[10px]">
                      <div class="relative inline-block w-[174px] h-[26px]">
                        <select name="Types of IPO" class="drop_a_c appearance-none w-full h-full pl-[10px] pr-[30px] text-[12px] bg-[#2042B6] rounded-[124px] text-[#FFFFFF] font-messinareguler ">
                        <option value="Types of IPO ">Types of IPO </option>
                          <option value="Types of IPO ">Types of IPO </option>
                          <option value="Types of IPO ">Types of IPO </option>
                          <option value="Types of IPO ">Types of IPO </option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                          <img src={icon} alt="Dropdown arrow" class="w-4 h-4" />
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className=" active-button">
                      <div className="py-[8px] w-[200px]  bg-[#EFF3F6] rounded-[124px]">
                        <div className="flex justify-center items-center">
                          <button
                            onClick={() => setActiveBtn('1Y')}
                            className={` text-[12px] text-[#748DA1] font-messinareguler ${activeBtn === '1Y' ? 'bg-[#2042B6] py-[px] px-[8px] rounded-[10px]  text-[#fff]' : 'bg-transparent'}`}
                            aria-selected={activeBtn === '1Y'}>
                            1Y
                          </button>
                          <button
                            onClick={() => setActiveBtn('YTD')}
                            className={`mx-[15px] text-[12px] text-[#748DA1] font-messinareguler ${activeBtn === 'YTD' ? 'bg-[#2042B6] py-[px] px-[8px] rounded-[10px]  text-[#fff]' : 'bg-transparent'}`}
                            aria-selected={activeBtn === 'YTD'}>
                            YTD
                          </button>
                          <button
                            onClick={() => setActiveBtn('6M')}
                            className={` text-[12px] text-[#748DA1] font-messinareguler ${activeBtn === '6M' ? 'bg-[#2042B6] py-[px] px-[8px] rounded-[10px]  text-[#fff]' : 'bg-transparent'}`}
                            aria-selected={activeBtn === '6M'}>
                            6M
                          </button>
                          <button
                            onClick={() => setActiveBtn('1M')}
                            className={`mx-[15px] text-[12px] text-[#748DA1] font-messinareguler ${activeBtn === '1M' ? 'bg-[#2042B6] py-[px] px-[8px] rounded-[10px]  text-[#fff]' : 'bg-transparent'}`}
                            aria-selected={activeBtn === '1M'}>
                            1M
                          </button>

                          <button
                            onClick={() => setActiveBtn('1W')}
                            className={` text-[12px] text-[#748DA1] font-messinareguler ${activeBtn === '1W' ? 'bg-[#2042B6] py-[px] px-[8px] rounded-[10px]  text-[#fff]' : 'bg-transparent'}`}
                            aria-selected={activeBtn === '1W'}>
                            1W
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

                <div className="lg:ml-[-85px]">
                  <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Graph;
