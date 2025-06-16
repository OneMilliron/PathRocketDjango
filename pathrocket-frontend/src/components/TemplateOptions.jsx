import PropTypes from "prop-types";

const TemplateOptions = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-row items-start justify-start gap-7 max-w-full text-center text-3xl text-Text-Muted font-[Afacad] mq1000:flex-wrap ${className}`}
    >
      <div className="self-stretch flex-[0.9159] rounded-2xl bg-[#f4f4f4] flex flex-col items-start justify-start pt-[35px] px-[52px] pb-10 gap-[25px] z-[6] mq450:pt-[23px] mq450:px-5 mq450:pb-[26px] mq450:box-border mq450:flex-1">
        <div className="w-[300px] h-[357px] relative rounded-2xl bg-[#f4f4f4] hidden" />
        <div className="self-stretch flex flex-col items-end justify-start gap-[17px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[47px] pr-[46px]">
            <img
              className="h-[116px] flex-1 relative max-w-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/vector-18.svg"
            />
          </div>
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1] mq450:text-lg mq1000:text-2xl">
            <p className="m-0">Generate</p>
            <p className="m-0">General Resume</p>
          </h3>
        </div>
        <button className="cursor-pointer [border:none] py-0 px-px bg-[transparent] flex flex-row items-start justify-start">
          <div className="rounded-[45px] bg-Primary flex flex-row items-start justify-start pt-[7px] px-[45px] pb-2 gap-[5px] z-[1]">
            <div className="h-11 w-[194px] relative rounded-[45px] bg-Primary hidden" />
            <div className="relative text-[22px] font-[Afacad] text-[#fff] text-center z-[1] mq450:text-lg">
              Generate
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-[20.8px] relative object-contain z-[1]"
                alt=""
                src="/vector-19.svg"
              />
            </div>
          </div>
        </button>
      </div>
      <div className="self-stretch flex-1 rounded-2xl bg-[#f4f4f4] flex flex-col items-end justify-start pt-[39px] px-[43px] pb-10 gap-[23.5px] z-[6] mq450:pt-[25px] mq450:px-5 mq450:pb-[26px] mq450:box-border">
        <div className="w-[300px] h-[357px] relative rounded-2xl bg-[#f4f4f4] hidden" />
        <div className="flex flex-row items-start justify-end py-0 px-11">
          <img
            className="h-[107px] w-[105px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/vector-20.svg"
          />
        </div>
        <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1] mq450:text-lg mq1000:text-2xl">
          <p className="m-0">Generate Resume</p>
          <p className="m-0">for Specific Job</p>
        </h3>
        <button className="cursor-pointer [border:none] py-0 px-2.5 bg-[transparent] self-stretch flex flex-row items-start justify-end">
          <div className="rounded-[45px] bg-Primary flex flex-row items-start justify-start pt-[7px] px-[45px] pb-2 gap-[5px] z-[1]">
            <div className="h-11 w-[194px] relative rounded-[45px] bg-Primary hidden" />
            <div className="relative text-[22px] font-[Afacad] text-[#fff] text-center z-[1] mq450:text-lg">
              Generate
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-[20.8px] relative object-contain z-[1]"
                alt=""
                src="/vector-19.svg"
              />
            </div>
          </div>
        </button>
      </div>
      <div className="self-stretch flex-[0.9065] rounded-2xl bg-[#f4f4f4] flex flex-col items-start justify-start pt-[38px] px-[53px] pb-10 gap-[25px] z-[6] mq450:pt-[25px] mq450:px-5 mq450:pb-[26px] mq450:box-border mq450:flex-1">
        <div className="w-[300px] h-[357px] relative rounded-2xl bg-[#f4f4f4] hidden" />
        <img
          className="w-[105px] h-[107px] relative hidden"
          alt=""
          src="/vector-20.svg"
        />
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-6">
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[33px]">
              <img
                className="h-28 flex-1 relative max-w-full overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src="/vector-22.svg"
              />
            </div>
            <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1] mq450:text-lg mq1000:text-2xl">
              <p className="m-0">Generate</p>
              <p className="m-0">Cover Letter</p>
            </h3>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[7px] px-[45px] pb-2 bg-Primary rounded-[45px] flex flex-row items-start justify-start gap-[5px] z-[1]">
          <div className="h-11 w-[194px] relative rounded-[45px] bg-Primary hidden" />
          <div className="relative text-[22px] font-[Afacad] text-[#fff] text-center z-[1] mq450:text-lg">
            Generate
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-4 h-[20.8px] relative object-contain z-[1]"
              alt=""
              src="/vector-19.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

TemplateOptions.propTypes = {
  className: PropTypes.string,
};

export default TemplateOptions;
