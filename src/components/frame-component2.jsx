import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[126px] pr-5 pl-[63px] box-border max-w-full text-left text-xl text-green font-poppins mq825:pb-[82px] mq825:box-border mq1425:pl-[31px] mq1425:box-border ${className}`}
    >
      <div className="w-[1347px] flex flex-row items-start justify-center gap-[80px] max-w-full lg:flex-wrap mq450:gap-[20px] mq825:gap-[40px]">
        <div className="w-[608px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[608px] max-w-full lg:flex-1 mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq825:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="bg-mediumspringgreen-100 flex flex-row items-start justify-start py-2 px-[23px] z-[1]">
                <div className="h-[46px] w-[164px] relative bg-mediumspringgreen-100 hidden" />
                <div className="relative font-medium inline-block min-w-[117px] z-[1] mq450:text-base">
                  Percentage
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full text-19xl text-gray-100">
                <h1 className="m-0 w-[586px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-4xl mq825:text-11xl">
                  Discover Our Comprehensive Banking Services
                </h1>
                <p className="m-0 self-stretch relative text-mid leading-[34px] text-darkslategray-300 z-[1]">
                  We're proud to introduce our suite of user-friendly services
                  designed to simplify and enhance your banking experience.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[5px] text-lg text-gray-100">
              <div className="w-[206px] relative font-semibold inline-block z-[1]">
                Banking Made Easy
              </div>
              <p className="m-0 self-stretch relative text-mid leading-[34px] text-darkslategray-300 z-[1]">
                where banking is simplified for your convenience. With our
                user-friendly services, managing your finances has never been
                easier.
              </p>
            </div>
            <button className="cursor-pointer [border:none] py-[18px] px-[34px] bg-green rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-mediumseagreen-100">
              <div className="h-[62px] w-[164px] relative rounded-3xs bg-green hidden" />
              <a className="[text-decoration:none] relative text-mid font-semibold font-poppins text-white text-left inline-block min-w-[96px] z-[1]">
                Learn More
              </a>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[428px] max-w-full text-2xl text-darkslategray-100 mq825:min-w-full">
          <div className="h-[692px] w-[1482px] absolute !m-[0] bottom-[-96px] left-[-777px] rounded-47xl flex items-center justify-center z-[0]">
            <img
              className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.188)]"
              alt=""
              src="/background-1.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[85px] max-w-full z-[1] mq450:gap-[21px] mq825:gap-[42px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
              <div className="relative font-medium mq450:text-mid">
                Investment Return
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[28px] max-w-full text-green mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full mq825:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full mq825:flex-wrap">
                    <div className="h-[9px] flex-1 relative bg-green min-w-[233px] max-w-full" />
                    <div className="h-[9px] w-[228.3px] relative bg-gainsboro-400" />
                  </div>
                </div>
                <b className="relative font-semibold inline-block min-w-[43px] mq450:text-mid">
                  67%
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
              <div className="relative font-medium mq450:text-mid">
                Transaction Fee Reduction
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[28px] max-w-full text-green mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full mq825:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
                    <div className="h-[9px] w-[222.8px] relative bg-green" />
                    <div className="h-[9px] flex-1 relative bg-gainsboro-400 min-w-[237px] max-w-full" />
                  </div>
                </div>
                <b className="relative font-semibold inline-block min-w-[44px] mq450:text-mid">
                  35%
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
              <div className="relative font-medium mq450:text-mid">
                Customer Growth
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[26px] max-w-full text-green mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[382px] max-w-full mq825:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
                    <div className="h-[9px] flex-1 relative bg-green min-w-[303px] max-w-full" />
                    <div className="h-[9px] w-[120.5px] relative bg-gainsboro-400" />
                  </div>
                </div>
                <b className="relative font-semibold inline-block min-w-[45px] mq450:text-mid">
                  84%
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
              <div className="relative font-medium mq450:text-mid">
                Customer Satisfaction
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[28px] max-w-full text-green mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[382px] max-w-full mq825:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                    <div className="h-[9px] flex-1 relative max-w-full">
                      <div className="absolute top-[0px] left-[0px] bg-green w-[305.3px] h-[9px]" />
                      <div className="absolute top-[0px] left-[305.3px] bg-gainsboro-400 w-[281.7px] h-[9px] z-[1]" />
                    </div>
                  </div>
                </div>
                <b className="relative font-semibold inline-block min-w-[43px] mq450:text-mid">
                  52%
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
