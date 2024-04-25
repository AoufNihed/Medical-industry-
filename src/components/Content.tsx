import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Content: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/chatgpt");
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-col items-start justify-center py-[186.2px] px-16 box-border gap-[32px] max-w-full text-center text-lg text-gray-100 font-inter mq750:gap-[16px] mq750:pl-8 mq750:pr-8 mq750:box-border mq450:pt-[79px] mq450:pb-[79px] mq450:box-border mq1050:pt-[121px] mq1050:pb-[121px] mq1050:box-border">
      <div className="self-stretch flex flex-col items-start justify-center gap-[12px] shrink-0 text-21xl">
        <h1 className="m-0 w-[138px] relative text-inherit tracking-[-0.04em] leading-[110%] font-bold font-inherit inline-block whitespace-nowrap mq450:text-5xl mq450:leading-[26px] mq1050:text-13xl mq1050:leading-[35px]">
          Sign up
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-darkgray-300 text-left">
          Sign up to enjoy the feature of Fermli.
        </div>
      </div>
      <div className="self-stretch h-[370px] flex flex-col items-start justify-center gap-[20px] max-w-full text-left">
        <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start pt-0 px-3 pb-4 relative gap-[2px] text-sm text-darkgray-200 border-[1.5px] border-solid border-gainsboro-200">
          <input
            className="w-24 [border:none] [outline:none] font-inter text-lg bg-[transparent] h-[27px] relative leading-[150%] text-gray-100 text-left inline-block p-0"
            placeholder="Nihed Aouf"
            type="text"
          />
          <div className="!m-[0] absolute top-[-10.5px] left-[12px] bg-white flex flex-row items-center justify-start py-0 px-1 whitespace-nowrap">
            <div className="relative leading-[150%] font-medium inline-block min-w-[74px]">
              Your Name
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start pt-0 pb-4 pr-[245px] pl-3 relative gap-[10px] border-[1.5px] border-solid border-gainsboro-200 mq450:pr-5 mq450:box-border">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/calendar.svg"
          />
          <div className="relative leading-[150%] inline-block min-w-[105px]">
            02-07-2003
          </div>
          <div className="!m-[0] absolute top-[-10.5px] left-[12px] bg-white flex flex-row items-center justify-start py-0 px-1 whitespace-nowrap text-sm text-darkgray-200">
            <div className="relative leading-[150%] font-medium inline-block min-w-[85px]">
              Date of Birth
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start pt-0 pb-4 pr-[182px] pl-3 relative gap-[2px] border-[1.5px] border-solid border-royalblue mq450:pr-5 mq450:box-border">
          <div className="relative leading-[150%] whitespace-nowrap">
            aouf.nihed@gmail.com
          </div>
          <div className="relative leading-[150%] font-light inline-block min-w-[6px]">
            |
          </div>
          <div className="!m-[0] absolute top-[-10.5px] left-[12px] bg-white flex flex-row items-center justify-start py-0 px-1 text-sm text-royalblue">
            <div className="relative leading-[150%] font-medium inline-block min-w-[36px]">
              Email
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs box-border flex flex-row items-center justify-center py-3.5 px-[15px] gap-[10px] max-w-full border-[1px] border-solid border-gainsboro-200">
          <input
            className="w-[calc(100%_-_54px)] [border:none] [outline:none] font-inter text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] text-darkgray-200 text-left inline-block min-w-[150px] max-w-[calc(100%_-_34px)] p-0"
            placeholder="Password"
            type="text"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/eyeoff.svg"
          />
        </div>
        <a
          className="[text-decoration:none] self-stretch rounded-3xs bg-royalblue flex flex-row items-center justify-center py-4 px-5 whitespace-nowrap cursor-pointer text-white"
          target="_blank"
          href="/chatgpt"
          onClick={onButtonClick}
        >
          <div className="relative tracking-[-0.01em] leading-[22px] font-semibold inline-block min-w-[65px]">
            Sign up
          </div>
        </a>
      </div>
      <div className="self-stretch relative leading-[150%] text-dimgray">
        <span>{`Already have an account?? `}</span>
        <span className="[text-decoration:underline] font-semibold text-royalblue">
          Sign in
        </span>
      </div>
    </div>
  );
};

export default Content;
