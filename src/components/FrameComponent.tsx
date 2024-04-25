import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="w-[1400px] flex flex-row items-start justify-end pt-0 px-[70px] pb-[568px] box-border max-w-full shrink-0 text-left text-23xl text-deepskyblue font-poppins lg:pl-[35px] lg:pr-[35px] lg:pb-[369px] lg:box-border mq750:pb-60 mq750:box-border">
      <div className="h-[650px] flex-1 overflow-hidden flex flex-row items-start justify-start pt-[162px] px-1 pb-0 box-border gap-[70px] shrink-0 [debug_commit:1de1738] max-w-full z-[9] mq450:gap-[17px] mq750:gap-[35px] mq750:pt-[105px] mq750:box-border">
        <img
          className="h-[517px] w-[517px] relative max-w-[calc(100%_-_724px)] mq1050:hidden mq1050:max-w-full"
          alt=""
          src="/ilustration.svg"
        />
        <div className="h-[488px] w-[654px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border max-w-[calc(100%_-_587px)] mq1050:hidden mq1050:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center py-[60.5px] px-0 gap-[36px] shrink-0 mq750:gap-[18px] mq750:pt-[39px] mq750:pb-[39px] mq750:box-border">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq1050:text-15xl mq450:text-6xl">
              <span>Streamline</span>
              <span className="text-whitesmoke">
                {" "}
                Appointments, Get Results
              </span>
              <span> Faster</span>
              <span className="text-whitesmoke"> Patient Appointment</span>
            </h1>
            <div className="self-stretch relative text-2xl font-extralight text-whitesmoke mq450:text-mid">
              Simplify scheduling, access records, and improve communication
              with your healthcare providers.
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
              <a className="[text-decoration:none] [filter:blur(0px)] rounded-29xl flex flex-row items-center justify-center py-[18px] px-[55px] whitespace-nowrap border-[1px] border-solid border-whitesmoke">
                <b className="relative text-3xl leading-[28px] inline-block font-poppins text-whitesmoke text-center min-w-[129px]">
                  Get Started
                </b>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
