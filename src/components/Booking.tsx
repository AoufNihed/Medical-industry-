import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Booking: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/chatgpt");
  }, [navigate]);

  return (
    <div className="w-[1440px] bg-gray-300 max-w-full overflow-hidden flex flex-col items-start justify-start pt-10 px-[143px] pb-[216px] box-border gap-[191.7px] leading-[normal] tracking-[normal] mq450:gap-[48px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[96px] mq750:pl-[71px] mq750:pr-[71px] mq750:box-border">
      <header className="self-stretch flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full text-center text-5xl text-white font-inter">
        <div
          className="flex-1 flex flex-row items-center justify-between relative max-w-full gap-[20px] cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <div className="h-[11px] w-[568px] max-w-full" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
            <div className="rounded-lg bg-primary flex flex-row items-center justify-center py-4 px-8 whitespace-nowrap">
              <div className="relative text-base leading-[11px] font-medium font-poppins text-white text-left inline-block min-w-[47px]">
                Log in
              </div>
            </div>
          </button>
          <img
            className="h-[43.6px] w-[50px] absolute !m-[0] top-[-6px] left-[15px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logo-iasaude@2x.png"
          />
          <h3 className="!m-[0] w-[73px] absolute top-[2.8px] left-[77px] text-inherit tracking-[-0.04em] leading-[110%] font-semibold font-inherit inline-block min-w-[73px] whitespace-nowrap z-[1]">
            Fermli.
          </h3>
        </div>
      </header>
      <section className="w-[1120px] flex flex-col items-start justify-start relative gap-[109.8px] max-w-full text-left text-[75px] text-gray-900 font-poppins lg:gap-[55px] mq750:gap-[27px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[39px] box-border max-w-full">
          <h1 className="m-0 w-[929px] relative text-inherit leading-[3.5px] font-semibold font-inherit inline-block shrink-0 max-w-full mq450:text-[45px] mq450:leading-[45px] mq1050:text-[60px] mq1050:leading-[60px]">
            <span>Find,medical visit</span>
            <span className="text-primary"> Easily</span>
          </h1>
        </div>
        <footer className="self-stretch shadow-[0px_6px_12px_rgba(19,_94,_172,_0.12)] rounded-xl bg-white flex flex-row items-center justify-start py-3 pr-3 pl-8 gap-[34px] text-left text-base text-darkslategray-100 font-poppins lg:flex-wrap mq750:gap-[17px]">
          <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-[16px] min-w-[177px]">
            <img
              className="h-8 w-8 relative shrink-0"
              loading="lazy"
              alt=""
              src="/vuesaxlinearlocation.svg"
            />
            <div className="w-[278px] flex flex-col items-start justify-start pt-0 pb-1 pr-5 pl-0 box-border gap-[12px] shrink-0">
              <div className="h-[11px] relative leading-[150%] font-medium inline-block min-w-[69px]">
                Location
              </div>
              <div className="h-2.5 relative text-sm leading-[150%] text-silver inline-block">
                Search your location
              </div>
            </div>
          </div>
          <div className="flex-[0.8491] box-border flex flex-row items-center justify-start py-0 pr-4 pl-6 gap-[16px] min-w-[177px] border-l-[1px] border-solid border-darkgray-100 mq450:flex-1">
            <img
              className="h-8 w-8 relative"
              loading="lazy"
              alt=""
              src="/vuesaxlinearcalendar.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-1 pr-5 pl-0 gap-[12px]">
              <div className="h-[11px] relative leading-[150%] font-medium inline-block min-w-[96px]">
                Pickup date
              </div>
              <div className="h-2.5 relative text-sm leading-[150%] text-silver inline-block min-w-[116px] whitespace-nowrap">
                Tue 15 Feb, 09:00
              </div>
            </div>
          </div>
          <div className="flex-[0.5731] box-border flex flex-row items-center justify-start py-0.5 pr-[91px] pl-6 gap-[16px] min-w-[177px] border-l-[1px] border-solid border-darkgray-100 mq450:pr-5 mq450:box-border mq450:flex-1">
            <img
              className="h-8 w-8 relative"
              alt=""
              src="/vuesaxlinearcalendar.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="h-[11px] relative leading-[150%] font-medium inline-block min-w-[95px]">
                Return date
              </div>
              <div className="h-2.5 relative text-sm leading-[150%] text-silver inline-block min-w-[108px] whitespace-nowrap">
                Thu 16 Feb, 11:00
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[18.5px] px-[51px] bg-primary rounded-lg flex flex-row items-center justify-center hover:bg-cornflowerblue-100">
            <div className="relative text-base leading-[11px] font-medium font-poppins text-white text-left inline-block min-w-[57px]">
              Search
            </div>
          </button>
        </footer>
        <img
          className="w-[152.2px] h-[60.4px] absolute !m-[0] top-[9.3px] right-[85.8px] object-contain"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </section>
    </div>
  );
};

export default Booking;
