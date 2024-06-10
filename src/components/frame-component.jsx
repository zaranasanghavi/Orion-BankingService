import Question1 from "./question1";
import Question from "./question";
import QuestionItem from "./question-item";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-black font-poppins ${className}`}
    >
      <div className="w-[1482px] flex flex-col items-end justify-start gap-[87px] max-w-full mq450:gap-[22px] mq825:gap-[43px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-green">
          <div className="w-[721px] flex flex-col items-start justify-start gap-[28px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
              <div className="rounded-4xs bg-mediumspringgreen-300 flex flex-row items-start justify-start py-2 px-[17px]">
                <div className="h-[46px] w-[163px] relative rounded-4xs bg-mediumspringgreen-300 hidden" />
                <div className="relative font-medium inline-block min-w-[129px] z-[1] mq450:text-base">
                  Testimonials
                </div>
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-31xl leading-[47px] font-bold font-inherit text-black text-center mq450:text-11xl mq450:leading-[28px] mq825:text-21xl mq825:leading-[38px]">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-7xl mq825:gap-[20px]">
          <button className="cursor-pointer pt-[25px] px-[72px] pb-6 bg-white shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl flex flex-row items-start justify-start border-[2px] border-solid border-green hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-mediumseagreen-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[94px] w-[264px] relative shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl bg-white box-border hidden border-[2px] border-solid border-green" />
            <b className="relative text-7xl font-semibold font-poppins text-black text-left inline-block min-w-[120px] z-[1] mq450:text-2xl">
              Payment
            </b>
          </button>
          <div className="shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl bg-whitesmoke flex flex-row items-start justify-start pt-[25px] px-[79px] pb-6 border-[2px] border-solid border-white mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[94px] w-[264px] relative shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl bg-whitesmoke box-border hidden border-[2px] border-solid border-white" />
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[105px] z-[1] mq450:text-2xl">
              General
            </h3>
          </div>
          <button className="cursor-pointer pt-[25px] px-[52px] pb-6 bg-whitesmoke shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl flex flex-row items-start justify-start border-[2px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[94px] w-[264px] relative shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl bg-whitesmoke box-border hidden border-[2px] border-solid border-white" />
            <div className="relative text-7xl font-semibold font-poppins text-black text-left z-[1] mq450:text-2xl">
              Transaction
            </div>
          </button>
          <div className="shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl bg-whitesmoke flex flex-row items-start justify-start pt-[25px] px-[77px] pb-6 border-[2px] border-solid border-white mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[94px] w-[264px] relative shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl bg-whitesmoke box-border hidden border-[2px] border-solid border-white" />
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[109px] z-[1] mq450:text-2xl">
              Security
            </h3>
          </div>
          <button className="cursor-pointer pt-[25px] px-5 pb-6 bg-whitesmoke flex-1 shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl box-border flex flex-row items-start justify-center min-w-[64px] border-[2px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-100">
            <div className="h-[94px] w-[264px] relative shadow-[0px_4px_54px_rgba(0,_0,_0,_0.03)] rounded-17xl bg-whitesmoke box-border hidden border-[2px] border-solid border-white" />
            <b className="relative text-7xl font-semibold font-poppins text-black text-left inline-block min-w-[64px] z-[1] mq450:text-2xl">
              Loan
            </b>
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[48px] max-w-full text-3xl mq825:gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[466px] max-w-full mq825:gap-[23px] mq825:min-w-full">
            <Question1
              isThereAMonthlyFeeForOpen="Is there a monthly fee for opening an account at your bank?"
              yesThereAreCertainTypesOf="Yes, there are certain types of accounts that may have a monthly fee. However, we also offer fee-free accounts with specific conditions."
            />
            <Question whatShouldIDoIfIForgetMyP="What should I do if I forget my password to log into my online account?" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
              <Question
                whatShouldIDoIfIForgetMyP="Does your bank offer interbank transfer services?"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
            <div className="self-stretch shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-start pt-[47px] pb-[46px] pr-[39px] pl-[42px] gap-[65px] max-w-full border-[1px] border-solid border-gainsboro-300 mq450:gap-[16px] mq825:flex-wrap mq825:gap-[32px] mq825:pl-[21px] mq825:box-border">
              <div className="h-[137px] w-[715px] relative shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-21xl bg-whitesmoke box-border hidden max-w-full border-[1px] border-solid border-gainsboro-300" />
              <div className="flex-1 flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border min-w-[343px] max-w-full mq825:min-w-full">
                <div className="self-stretch relative font-semibold z-[1] mq450:text-lg">
                  How can I check my account balance?
                </div>
              </div>
              <img
                className="h-10 w-10 relative object-contain z-[1]"
                alt=""
                src="/expand-1@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[41px] min-w-[466px] max-w-full mq825:gap-[20px] mq825:min-w-full">
            <Question1
              isThereAMonthlyFeeForOpen="How can I apply for a loan at your bank?"
              yesThereAreCertainTypesOf="To apply for a loan, you can visit one of our branches or fill out a loan application form online through our website."
              propGap="30px"
              propHeight="214px"
              propWidth="581px"
            />
            <Question
              whatShouldIDoIfIForgetMyP="How do I deposit a check or cash into my account?"
              propAlignSelf="stretch"
              propFlex="unset"
            />
            <QuestionItem />
            <QuestionItem />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
