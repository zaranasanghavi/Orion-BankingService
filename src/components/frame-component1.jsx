import Card from "./card";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[305px] box-border max-w-full text-left text-36xl text-gray-100 font-poppins mq825:pb-[129px] mq825:box-border mq1425:pb-[198px] mq1425:box-border ${className}`}
    >
      <div className="w-[1482px] flex flex-col items-start justify-start gap-[76px] max-w-full mq450:gap-[19px] mq825:gap-[38px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
          <button className="cursor-pointer [border:none] py-2 px-5 bg-mediumspringgreen-100 rounded-4xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumseagreen-200">
            <div className="h-[46px] w-[163px] relative rounded-4xs bg-mediumspringgreen-100 hidden" />
            <div className="relative text-xl font-medium font-poppins text-green text-left inline-block min-w-[123px] z-[1]">
              Who We Are
            </div>
          </button>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
              <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-14xl mq825:text-25xl">
                Our Latest Blogs
              </h1>
            </div>
            <button className="cursor-pointer py-[15px] px-[33px] bg-white w-[164px] rounded-3xs box-border flex flex-row items-start justify-start gap-[2px] border-[2px] border-solid border-green">
              <div className="h-[62px] w-[164px] relative rounded-3xs bg-white box-border hidden border-[2px] border-solid border-green" />
              <a className="[text-decoration:none] relative text-mid font-semibold font-poppins text-gray-100 text-left inline-block min-w-[68px] z-[1]">
                View All
              </a>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-6 h-6 relative object-contain z-[1]"
                  alt=""
                  src="/expand-more@2x.png"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border max-w-full text-8xl">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[46px] max-w-full mq825:gap-[23px]">
            <Card
              banking="Banking"
              stayUpdatedWithOurLatestF="Stay Updated with Our Latest Financial"
              byJohn="By John"
              august252023="August 25, 2023"
            />
            <Card
              banking="Mobile"
              stayUpdatedWithOurLatestF="Explore What's New in Banking Innovation"
              byJohn="By Natasha"
              august252023="June 12, 2023"
              propWidth="109px"
              propMinWidth="56px"
              propMinWidth1="97px"
              propDisplay="inline-block"
              propMinWidth2="110px"
            />
            <Card
              banking="Banking"
              stayUpdatedWithOurLatestF="Discover Our Newest Features and Services"
              byJohn="By William"
              august252023="July 29, 2023"
              propWidth="117px"
              propMinWidth="69px"
              propMinWidth1="87px"
              propDisplay="inline-block"
              propMinWidth2="107px"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="flex flex-row items-start justify-start gap-[11px]">
            <div className="h-4 w-4 relative rounded-[50%] bg-green" />
            <div className="h-4 w-4 relative rounded-[50%] bg-gainsboro-400" />
            <div className="h-4 w-4 relative rounded-[50%] bg-gainsboro-400" />
            <div className="h-4 w-4 relative rounded-[50%] bg-gainsboro-400" />
            <div className="h-4 w-4 relative rounded-[50%] bg-gainsboro-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
