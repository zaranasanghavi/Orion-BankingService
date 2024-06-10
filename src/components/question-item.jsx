import PropTypes from "prop-types";

const QuestionItem = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-left text-3xl text-black font-poppins ${className}`}
    >
      <div className="flex-1 shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-start pt-[47px] pb-[46px] pr-[39px] pl-[42px] gap-[65px] max-w-full border-[1px] border-solid border-gainsboro-300 mq450:gap-[16px] mq825:flex-wrap mq825:gap-[32px] mq825:pl-[21px] mq825:box-border">
        <div className="h-[137px] w-[715px] relative shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-21xl bg-whitesmoke box-border hidden max-w-full border-[1px] border-solid border-gainsboro-300" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border min-w-[343px] max-w-full mq825:min-w-full">
          <div className="relative font-semibold z-[1] mq450:text-lg">
            Does your bank offer bank guarantee services?
          </div>
        </div>
        <img
          className="h-10 w-10 relative object-contain z-[1]"
          alt=""
          src="/expand-1@2x.png"
        />
      </div>
    </div>
  );
};

QuestionItem.propTypes = {
  className: PropTypes.string,
};

export default QuestionItem;
