import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  user4Fill?: string;
  users?: string;
  settingsfill?: string;
  playFill?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  user4Fill,
  users,
  settingsfill,
  playFill,
  propPadding,
  propMinWidth,
  propMinWidth1,
  propColor,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const usersStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const settingsfillStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="flex flex-row items-start justify-start gap-[8px] text-left text-xs text-gray-700 font-poppins"
      style={frameDiv1Style}
    >
      <img
        className="h-5 w-5 relative z-[1]"
        loading="lazy"
        alt=""
        src={user4Fill}
      />
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div
            className="relative leading-[18px] font-black inline-block min-w-[36px] z-[1]"
            style={usersStyle}
          >
            {users}
          </div>
          <div
            className="relative text-7xl leading-[20px] font-black text-gray-800 inline-block min-w-[71px] z-[1] mq450:text-2xl mq450:leading-[16px]"
            style={settingsfillStyle}
          >
            {settingsfill}
          </div>
          <div className="flex flex-row items-start justify-start gap-[2px] text-secondary-green">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-3 h-3 relative object-contain z-[1]"
                loading="lazy"
                alt=""
                src={playFill}
              />
            </div>
            <div
              className="relative leading-[18px] font-black inline-block min-w-[24px] z-[1]"
              style={divStyle}
            >
              %10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
