import PropTypes from "prop-types";

const TestimonialContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[695px] flex flex-col items-start justify-start gap-[46px] max-w-full text-left text-xl text-green font-poppins mq825:gap-[23px] ${className}`}
    >
      <div className="w-[544px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[28px] max-w-full">
        <div className="rounded-4xs bg-mediumspringgreen-300 flex flex-row items-start justify-start py-2 px-[17px] z-[3]">
          <div className="h-[46px] w-[163px] relative rounded-4xs bg-mediumspringgreen-300 hidden" />
          <div className="relative font-medium inline-block min-w-[129px] z-[1] mq450:text-base">
            Testimonials
          </div>
        </div>
        <h1 className="m-0 self-stretch relative text-31xl leading-[47px] font-bold font-inherit text-white z-[3] mq450:text-11xl mq450:leading-[28px] mq825:text-21xl mq825:leading-[38px]">
          What Our Client Says
        </h1>
      </div>
      <blockquote className="m-0 self-stretch relative text-3xl leading-[47px] font-medium text-gray-400 z-[3] mq450:text-lg mq450:leading-[38px]">
        “Switching to Orion has been one of the best decisions I've made for my
        finances. Their customer service is exceptional, and their online
        banking platform is incredibly user-friendly”
      </blockquote>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[7px] text-5xl text-white">
        <h3 className="m-0 relative text-inherit leading-[31px] font-bold font-inherit z-[3] mq450:text-lgi mq450:leading-[25px]">
          Sarah Agustin
        </h3>
        <b className="relative text-mid leading-[31px] font-semibold text-gray-500 z-[3]">
          Web Developer
        </b>
      </div>
      <img
        className="w-36 h-[60px] relative z-[3]"
        loading="lazy"
        alt=""
        src="/button.svg"
      />
    </div>
  );
};

TestimonialContainer.propTypes = {
  className: PropTypes.string,
};

export default TestimonialContainer;
