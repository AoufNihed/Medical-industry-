import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className="w-[1542px] flex flex-row items-start justify-center pt-0 px-5 pb-[13px] box-border max-w-full text-left text-48xl text-whitesmoke font-poppins">
      <div className="h-[594px] w-[1262px] relative overflow-hidden shrink-0 [debug_commit:1de1738] max-w-full z-[7]">
        <div className="absolute top-[40px] left-[-1.5px] w-[714px] flex flex-col items-start justify-center py-[3.5px] px-0 box-border gap-[36px] max-w-full">
          <h1 className="m-0 w-[744px] relative text-inherit font-semibold font-inherit inline-block max-w-[105%] shrink-0 mq1050:text-35xl mq450:text-21xl">
            <span>{`Empowering `}</span>
            <span className="text-cornflowerblue-400">Patients</span>
            <span>{`, Taking Control of Their `}</span>
            <span className="text-cornflowerblue-400">Health</span>
            <span> Journey</span>
          </h1>
          <div className="w-[618px] relative text-2xl font-extralight inline-block max-w-full mq450:text-mid">
            Simplifying communication, managing information, and improving
            outcomes,o manage your healthcare effectively.
          </div>
          <div className="w-[510px] overflow-x-auto flex flex-row items-center justify-start gap-[26px] max-w-full text-center text-3xl text-gray-300">
            <a
              className="[text-decoration:none] w-[242px] [filter:blur(0px)] rounded-29xl bg-deepskyblue shrink-0 flex flex-row items-center justify-center p-5 box-border text-[inherit] hover:bg-cornflowerblue-300"
              target="_blank"
              href="/booking"
            >
              <b className="relative leading-[28px] inline-block min-w-[61px] mq450:text-lg mq450:leading-[22px]">
                Login
              </b>
            </a>
            <a
              className="[text-decoration:none] [filter:blur(0px)] rounded-29xl flex flex-row items-center justify-center py-[18px] px-[77px] whitespace-nowrap text-whitesmoke border-[1px] border-solid border-whitesmoke hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100"
              target="_blank"
              href="/sign-up"
            >
              <b className="relative leading-[28px] inline-block min-w-[85px]">
                Sign up
              </b>
            </a>
          </div>
        </div>
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[680.5px] max-h-full w-[618px] overflow-hidden object-cover z-[1]"
          alt=""
          src="/img@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
