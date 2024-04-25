import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  /** Style props */
  fermlyDebugCommit?: CSSProperties["debugCommit"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  fermlyDebugCommit,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: fermlyDebugCommit,
    };
  }, [fermlyDebugCommit]);

  return (
    <div
      className="flex flex-row items-end justify-start gap-[8px] text-center text-xl text-deepskyblue font-poppins"
      style={frameDivStyle}
    >
      <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-0 z-[7]">
        <img
          className="h-[51px] w-[50px] relative object-cover"
          loading="lazy"
          alt=""
          src="/logo-iasaude1@2x.png"
        />
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-5">
        <b className="relative inline-block min-w-[72px] z-[7]">Fermly</b>
      </div>
    </div>
  );
};

export default FrameComponent4;
