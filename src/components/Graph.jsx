import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import { FiPlus } from "react-icons/fi";
import union from "../assets/Union.png";
import Container from './Container';
import { RxMinus } from "react-icons/rx";

const Graph = () => {
  const [show, setShow] = useState(false);

  const data = [
    ['month', 'WPPOOL', 'Google', 'Microsoft', 'Twitter'],
    ['February', 0, 0, 0, 0],
    ['March', 50, 10, 60, 6],
    ['April', 32, 7, 43, 16],
    ['May', 18, 10, 5, 4],
    ['June', 78, 38, 19,37],
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
                  {show ?  <div className=" absolute lg:top-[5%] top-[11%] lg:text-[16px] text-[12px] lg:right-[12px] right-[20px] text-[#fff] hover:text-[#191618]">
                    <RxMinus/>
                  </div> : <div className=" absolute lg:top-[5%] top-[38%] lg:text-[16px] text-[12px] right-[12px] text-[#fff] hover:text-[#191618]">
                      <FiPlus/>
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
                              <h4 className='lg:text-[12px] text-[8px] font-messinareguler text-[#191618] lg:leading-[120%] lg:border-r-[5px] border-r-[2px] border-[#7CA63A] ' >WPPOOL Index</h4>
                            </div>
                          </div>
                        </div>


                        <div className="lg:py-[14px] py-[10px] bg-[#ededed] rounded-[6px] lg:mx-[20px] mx-[10px]">
                          <div className="flex justify-between items-center lg:w-[210px] mx-[7px]">
                            <div className="w-[30%] pr-[40px] ">
                              <h3 className='lg:text-[30px] text-[16px] text-[#6F34A1] font-natsreguler'>+26.6%</h3>
                            </div>
                            <div className="w-[29%]">
                              <h4 className='lg:text-[12px] text-[8px] font-messinareguler text-[#191618] lg;leading-[120%] lg:border-r-[5px] border-r-[2px] border-[#6F34A1] ' >WPPOOL Index</h4>
                            </div>
                          </div>
                        </div>
                        </div>

                        {/* <div className="flex lg:pt-0 pt-[20px]">
                        <div className="lg:py-[14px] py-[10px] bg-[#ededed] rounded-[6px]">
                          <div className="flex justify-between items-center lg:w-[210px] mx-[7px]">
                            <div className="w-[30%] pr-[40px] ">
                              <h3 className='lg:text-[30px] text-[16px] text-[#7CA63A] font-natsreguler'>+34.1%</h3>
                            </div>
                            <div className="w-[29%]">
                              <h4 className='lg:text-[12px] text-[7px] font-messinareguler text-[#191618] lg:leading-[120%] lg:border-r-[5px] border-r-[2px] border-[#7CA63A] ' >WPPOOL Index</h4>
                            </div>
                          </div>
                        </div>


                        <div className="lg:py-[14px] py-[10px] bg-[#ededed] rounded-[6px] lg:ml-[20px] ml-[10px]">
                          <div className="flex justify-between items-center lg:w-[210px] mx-[7px]">
                            <div className="w-[33%] pr-[40px] ">
                              <h3 className='lg:text-[30px] text-[16px] text-[#6F34A1] font-natsreguler'>+17%</h3>
                            </div>
                            <div className="w-[29%]">
                              <h4 className='lg:text-[12px] text-[9px] font-messinareguler text-[#191618] leading-[120%] lg:border-r-[5px] border-r-[2px] border-[#6F34A1] ' >WPPOOL Index</h4>
                            </div>
                          </div>
                        </div>
                        </div> */}
                    </div>



                <div className="lg;flex justify-between">
                <div className="flex">
                  <div className="w-[40%] lg:flex">
                    <div className="">
                      <select className='lg:w-[174px] h-[26px] leading-[26px] text-[12px] bg-[#2042B6] rounded-[124px] pt-0 pb-0 px-[10px] text-[#FFFFFF] font-messinareguler' id="Sectors" name="Sectors">
                        <option value="Sectors">Sectors</option>
                        <option value="Sectors">Sectors</option>
                        <option value="Sectors">Sectors</option>
                        <option value="Sectors">Sectors</option>
                      </select>
                    </div>

                    <div className="lg:pl-[18px] lg:pt-0 pt-[10px]">
                      <select className='lg:w-[174px] h-[26px] leading-[26px] text-[12px] bg-[#2042B6] rounded-[20px] pt-0 pb-0 px-[10px] text-[#FFFFFF] font-messinareguler' id="Types of IPO" name="Types of IPO">
                        <option value="Types of IPO ">Types of IPO </option>
                        <option value="Types of IPO ">Types of IPO </option>
                        <option value="Types of IPO ">Types of IPO </option>
                        <option value="Types of IPO ">Types of IPO </option>
                      </select>
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
