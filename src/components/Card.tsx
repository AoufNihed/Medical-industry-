import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CardType = {
  img?: string;
  virtualAssistants?: string;
  offer247SupportAndAnswerB?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Card: FunctionComponent<CardType> = ({
  img,
  virtualAssistants,
  offer247SupportAndAnswerB,
  propAlignSelf,
}) => {
  const virtualAssistantsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="flex-1 shadow-[0px_4px_20.4px_rgba(56,_182,_255,_0.13)] rounded-6xl bg-gray-300 flex flex-col items-center justify-start py-8 px-6 box-border gap-[32px] min-w-[285px] max-w-full text-center text-13xl text-whitesmoke font-outfit mq450:gap-[16px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <img
          className="w-20 h-20 relative object-contain"
          loading="lazy"
          alt=""
          src={img}
        />
        <h2
          className="m-0 self-stretch relative text-inherit leading-[42px] font-extrabold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]"
          style={virtualAssistantsStyle}
        >
          {virtualAssistants}
        </h2>
        <div className="self-stretch relative text-base leading-[150%] font-poppins">
          {offer247SupportAndAnswerB}
        </div>
      </div>
      <div className="rounded-3xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-base text-deepskyblue font-poppins">
        <div className="relative leading-[100%] font-semibold inline-block min-w-[93px] whitespace-nowrap">
          Get Started
        </div>
        <img
          className="h-6 w-6 relative"
          loading="lazy"
          alt=""
          src="/iconarrow.svg"
        />
      </div>
    </div>
  );
};

export default Card;
