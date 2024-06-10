import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[101px] box-border max-w-full text-left text-xl text-gray-100 font-poppins lg:pb-[43px] lg:box-border mq825:pb-7 mq825:box-border mq1425:pb-[66px] mq1425:box-border ${className}`}
    >
      <div className="w-[1482px] flex flex-col items-end justify-start gap-[59.5px] max-w-full mq825:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.5px] box-border max-w-full text-green">
          <div className="w-[1431px] flex flex-row items-start justify-start gap-[130px] max-w-full lg:flex-wrap mq450:gap-[16px] mq825:gap-[32px] mq1425:gap-[65px]">
            <div className="flex-1 flex flex-row items-start justify-start min-w-[448px] max-w-full z-[3] mq825:min-w-full">
              <div className="h-[762px] flex-1 relative max-w-full">
                <div className="absolute top-[73px] left-[0px] rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_#1ad079,_rgba(106,_106,_106,_0))] w-[581px] h-[689px]" />
                <div className="absolute h-full top-[0px] bottom-[0px] left-[15px] bg-silver w-[674px] z-[1]" />
              </div>
            </div>
            <div className="w-[612px] flex flex-col items-start justify-start pt-[141px] px-0 pb-0 box-border min-w-[612px] max-w-full lg:flex-1 mq825:pt-[92px] mq825:box-border mq825:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq825:gap-[24px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <div className="relative font-medium z-[3] mq450:text-base">
                      Banking Service Landing Page
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-39xl text-white">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                      <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[3] mq450:text-16xl mq825:text-27xl">
                        <span>{`Explore Our `}</span>
                        <span className="text-green">Range</span>
                        <span>{` of `}</span>
                        <span className="text-green">Banking</span>
                        <span> Services</span>
                      </h1>
                    </div>
                    <p className="m-0 self-stretch relative text-mid font-light text-gray-200 whitespace-pre-wrap z-[3]">
                      Discover the convenience of modern banking with our
                      user-friendly online and mobile platforms, allowing you to
                      access your accounts anytime, anywhere.
                    </p>
                  </div>
                </div>
                <div className="w-[429px] flex flex-row items-end justify-between gap-[20px] max-w-full text-13xl text-white font-rubik mq450:flex-wrap">
                  <button className="cursor-pointer [border:none] py-[17px] px-[26px] bg-green rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-mediumseagreen-100">
                    <div className="h-[57px] w-[140px] relative rounded-3xs bg-green hidden" />
                    <b className="relative text-mini font-semibold font-poppins text-white text-left inline-block min-w-[87px] z-[1]">
                      Get Started
                    </b>
                  </button>
                  <div className="flex flex-col items-start justify-start">
                    <div className="h-[37px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                      <div className="mb-[-1px] relative font-medium inline-block min-w-[67px] shrink-0 [debug_commit:bf4bc93] z-[3] mq450:text-lgi mq825:text-7xl">
                        20M
                      </div>
                    </div>
                    <div className="relative text-mini font-poppins text-gray-200 inline-block min-w-[91px] shrink-0 [debug_commit:bf4bc93] z-[4]">
                      Active Users
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[10.1px] box-border max-w-full text-center text-36xl">
          <div className="w-[662px] flex flex-col items-start justify-start gap-[29.9px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <button className="cursor-pointer [border:none] py-2 px-5 bg-mediumspringgreen-100 rounded-4xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumseagreen-200">
                <div className="h-[46px] w-[163px] relative rounded-4xs bg-mediumspringgreen-100 hidden" />
                <div className="relative text-xl font-medium font-poppins text-green text-left inline-block min-w-[123px] z-[1]">
                  Who We Are
                </div>
              </button>
            </div>
            <h1 className="m-0 self-stretch h-[73px] relative text-inherit font-bold font-inherit inline-block mq450:text-14xl mq825:text-25xl">
              Our Main Service
            </h1>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[80px] max-w-full text-7xl mq450:gap-[20px] mq825:gap-[40px] mq1425:flex-wrap">
          <div className="h-[122.5px] w-[432px] relative max-w-full">
            <div className="absolute top-[0px] left-[0px] rounded-11xl w-full h-full flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[2px] [transform:scale(3.09)]"
                loading="lazy"
                alt=""
                src="/background.svg"
              />
            </div>
            <b className="absolute top-[34px] left-[115px] font-semibold z-[1] mq450:text-2xl">
              Online Banking
            </b>
          </div>
          <div className="w-[445px] flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full">
            <div className="self-stretch shadow-[0px_2px_128px_10px_rgba(0,_0,_0,_0.02)] rounded-11xl bg-whitesmoke box-border flex flex-row items-start justify-center pt-[30px] px-5 pb-[29px] whitespace-nowrap max-w-full border-[3px] border-solid border-white">
              <div className="h-[106px] w-[432px] relative shadow-[0px_2px_128px_10px_rgba(0,_0,_0,_0.02)] rounded-11xl bg-whitesmoke box-border hidden max-w-full border-[3px] border-solid border-white" />
              <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1]">
                Mobile Banking
              </h3>
            </div>
          </div>
          <div className="w-[432px] shadow-[0px_2px_128px_10px_rgba(0,_0,_0,_0.02)] rounded-11xl bg-whitesmoke box-border flex flex-row items-start justify-center pt-[30px] pb-[29px] pr-5 pl-[21px] whitespace-nowrap max-w-full border-[3px] border-solid border-white">
            <div className="h-[106px] w-[432px] relative shadow-[0px_2px_128px_10px_rgba(0,_0,_0,_0.02)] rounded-11xl bg-whitesmoke box-border hidden max-w-full border-[3px] border-solid border-white" />
            <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1]">
              Financial Planning
            </h3>
          </div>
        </div>
        <div className="w-[1469px] flex flex-row items-start justify-center gap-[61px] max-w-full text-19xl mq450:gap-[15px] mq825:gap-[30px] mq1425:flex-wrap">
          <div className="flex-1 shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-31xl bg-white flex flex-col items-start justify-start pt-[67px] px-[76px] pb-[60px] box-border gap-[50px] min-w-[500px] max-w-full mq825:gap-[25px] mq825:pt-11 mq825:px-[38px] mq825:pb-[39px] mq825:box-border mq825:min-w-full">
            <div className="w-[769px] h-[673px] relative shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-31xl bg-white hidden max-w-full" />
            <div className="w-[603px] flex flex-col items-start justify-start gap-[35px] max-w-full mq825:gap-[17px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
                <h1 className="m-0 w-[550px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-4xl mq825:text-11xl">
                  Start Managing Your Money Hassle-Free
                </h1>
                <p className="m-0 self-stretch relative text-mid leading-[38px] text-darkslategray-200 z-[1]">
                  Our Online Banking service offers you the convenience of
                  managing your finances from anywhere at any time. With secure
                  access to your accounts, you can check balances.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-[14px] z-[1] text-mid text-gray-300">
                <div className="flex flex-row items-start justify-start gap-[17px]">
                  <div className="h-[42px] w-[42px] relative rounded-2xl bg-mediumspringgreen-200">
                    <div className="absolute top-[0px] left-[0px] rounded-2xl bg-mediumspringgreen-200 w-full h-full hidden" />
                    <img
                      className="absolute h-[38.57%] w-[52.14%] top-[30.71%] right-[22.86%] bottom-[30.71%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                      loading="lazy"
                      alt=""
                      src="/done.svg"
                    />
                  </div>
                  <div className="relative leading-[42px]">
                    Seamless Scheduling
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[17px]">
                  <div className="h-[42px] w-[42px] relative rounded-2xl bg-mediumspringgreen-200">
                    <div className="absolute top-[0px] left-[0px] rounded-2xl bg-mediumspringgreen-200 w-full h-full hidden" />
                    <img
                      className="absolute h-[38.57%] w-[52.14%] top-[30.71%] right-[22.86%] bottom-[30.71%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/done.svg"
                    />
                  </div>
                  <div className="relative leading-[42px]">
                    Service Guarantee
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[17px] mq450:flex-wrap">
                  <div className="h-[42px] w-[42px] relative rounded-2xl bg-mediumspringgreen-200">
                    <div className="absolute top-[0px] left-[0px] rounded-2xl bg-mediumspringgreen-200 w-full h-full hidden" />
                    <img
                      className="absolute h-[38.57%] w-[52.14%] top-[30.71%] right-[22.86%] bottom-[30.71%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/done.svg"
                    />
                  </div>
                  <div className="relative leading-[42px]">
                    Integrated Collaboration
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[18px] px-[30px] bg-green rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-mediumseagreen-100">
              <div className="h-[62px] w-[228px] relative rounded-3xs bg-green hidden" />
              <div className="relative text-mid font-semibold font-poppins text-white text-left z-[1]">
                Start your business
              </div>
            </button>
          </div>
          <div className="h-[673px] w-[639px] relative shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-31xl bg-gainsboro-400 min-w-[639px] max-w-full mq825:min-w-full mq1425:flex-1" />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
