import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-[33px] text-[#fff] font-[Afacad] ${className}`}
    >
      <img
        className="h-[42px] w-[31px] absolute !!m-[0 important] bottom-[14px] left-[391px] object-contain z-[4]"
        loading="lazy"
        alt=""
        src="/vector-12.svg"
      />
      <div className="flex-1 bg-Primary flex flex-row items-start justify-between pt-4 pb-3.5 pl-12 pr-[104px] box-border gap-5 max-w-full z-[6] mq725:pr-[26px] mq725:box-border mq1050:pl-6 mq1050:pr-[52px] mq1050:box-border">
        <div className="h-[74px] w-[1057px] relative bg-Primary hidden max-w-full" />
        <div className="flex flex-row items-start justify-start gap-[9px] max-w-full">
          <h1 className="m-0 relative text-[length:inherit] font-bold font-[inherit] z-[7] mq725:hidden">
            Generate Your Resume With Path Rocket
          </h1>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-[31px] h-[42px] relative object-contain z-[7]"
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
          </div>
        </div>
        <div className="w-[82px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-between gap-5">
            {/*<img
              className="h-7 w-[29px] relative z-[7]"
              loading="lazy"
              alt=""
              src="/vector2.svg"
            />*/}
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
              {/*<img
                className="w-5 h-[23px] relative z-[7]"
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />*/}
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[46px] w-px absolute !!m-[0 important] top-[calc(50%_-_23px)] right-[223px] z-[7]"
        alt=""
        src="/vector-101.svg"
      />
      {/*<img
        className="h-[calc(100%_-_22px)] w-[52px] absolute !!m-[0 important] top-[11px] right-[17px] bottom-[11px] max-h-full object-contain z-[7]"
        loading="lazy"
        alt=""
        src="/group-351@2x.png"
      />*/}
    </header>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
