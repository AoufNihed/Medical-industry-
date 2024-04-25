import { FunctionComponent } from "react";

const UsersNew: FunctionComponent = () => {
  return (
    <div className="w-52 flex flex-col items-start justify-start gap-[8px] text-left text-sm text-gray-900 font-poppins">
      <div className="self-stretch shadow-[0px_-1px_0px_rgba(255,_255,_255,_0.08)_inset,_0px_1px_0px_rgba(0,_0,_0,_0.2)_inset] rounded-lg bg-gray-500 flex flex-row items-start justify-start py-2.5 px-4 gap-[12px] top-[0] z-[99] sticky">
        <img
          className="h-5 w-5 relative min-h-[20px]"
          alt=""
          src="/search-line.svg"
        />
        <input
          className="w-28 [border:none] [outline:none] font-black font-poppins text-sm bg-[transparent] h-5 relative leading-[20px] text-gray-400 text-left inline-block p-0"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 px-4 gap-[12px]">
        <img
          className="h-5 w-5 relative min-h-[20px]"
          loading="lazy"
          alt=""
          src="/home-3-fill.svg"
        />
        <div className="w-28 relative leading-[20px] font-black inline-block shrink-0">
          Dashboard
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-2.5 px-4 bg-secondary-blue self-stretch rounded-lg flex flex-row items-start justify-start gap-[12px] hover:bg-cornflowerblue-200">
        <img
          className="h-5 w-5 relative min-h-[20px]"
          alt=""
          src="/chart-bar-fill.svg"
        />
        <a
          className="w-28 relative text-sm leading-[20px] font-black font-poppins text-gray-800 text-left inline-block shrink-0 [text-decoration:none]"
          href="https://www.mingcute.com/?figma=0722"
          target="_blank"
        >
          Analytics
        </a>
      </button>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[18px]">
        <div className="h-px flex-1 bg-gray-600" />
      </div>
      <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 px-4 gap-[12px]">
        <img
          className="h-5 w-5 relative min-h-[20px]"
          loading="lazy"
          alt=""
          src="/settings-3-fill.svg"
        />
        <a
          className="w-28 relative leading-[20px] font-black text-[inherit] inline-block shrink-0 [text-decoration:none]"
          href="https://www.mingcute.com/?figma=0722"
          target="_blank"
        >
          Settings
        </a>
      </div>
      <a
        className="[text-decoration:none] self-stretch rounded-lg bg-secondary-blue flex flex-row items-start justify-start py-2.5 px-4 gap-[12px] whitespace-nowrap text-gray-800"
        target="_blank"
        href="/booking"
      >
        <img className="h-5 w-5 relative min-h-[20px]" alt="" />
        <div className="w-28 relative leading-[20px] font-black inline-block shrink-0">
          Get Visit
        </div>
      </a>
    </div>
  );
};

export default UsersNew;
