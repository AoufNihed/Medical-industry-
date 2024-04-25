import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";

const FrameComponent3: FunctionComponent = () => {
  return (
    <header className="w-[1500.5px] flex flex-row items-start justify-center pt-0 px-5 pb-[33px] box-border max-w-full text-center text-xl text-deepskyblue font-poppins">
      <div className="w-[1063.5px] flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] gap-[20px] max-w-full mq1050:w-[676px]">
        <FrameComponent4 />
        <nav className="m-0 w-[387.5px] flex flex-col items-start justify-start pt-[21.5px] pb-0 pr-[24.5px] pl-0 box-border max-w-full mq1050:hidden mq450:w-[24.5px]">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-xl text-whitesmoke font-poppins mq450:hidden">
            <div className="relative leading-[28px] inline-block min-w-[60px] z-[7]">
              Home
            </div>
            <div className="relative leading-[28px] inline-block min-w-[60px] z-[7]">
              About
            </div>
            <div className="relative leading-[28px] inline-block min-w-[83px] z-[7]">
              Services
            </div>
            <div className="relative leading-[28px] inline-block min-w-[40px] z-[7]">
              FAQ
            </div>
          </nav>
        </nav>
        <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border max-w-full text-gray-300">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <a
              className="[text-decoration:none] rounded-49xl bg-deepskyblue flex flex-row items-start justify-center py-[13px] px-[47.5px] whitespace-nowrap z-[7] text-[inherit]"
              target="_blank"
              href="/sign-up"
            >
              <b className="relative inline-block min-w-[77px]">Sign up</b>
            </a>
            <a
              className="[text-decoration:none] rounded-49xl bg-deepskyblue flex flex-row items-start justify-start py-[13px] px-14 whitespace-nowrap z-[7] text-[inherit] hover:bg-cornflowerblue-300"
              target="_blank"
              href="/booking"
            >
              <b className="relative inline-block min-w-[60px]">Log In</b>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
