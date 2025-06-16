import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent2 = ({
  className = "",
  valueSign,
  valueSignTextAlign,
  vector13,
  innerPlanAlignItems,
  planTitleJustifyContent,
  planTitlePadding,
  basicPlan,
}) => {
  const valueSignStyle = useMemo(() => {
    return {
      textAlign: valueSignTextAlign,
    };
  }, [valueSignTextAlign]);

  const innerPlanStyle = useMemo(() => {
    return {
      alignItems: innerPlanAlignItems,
    };
  }, [innerPlanAlignItems]);

  const planTitleStyle = useMemo(() => {
    return {
      justifyContent: planTitleJustifyContent,
      padding: planTitlePadding,
    };
  }, [planTitleJustifyContent, planTitlePadding]);

  return (
    <section
      className={`flex-1 rounded-[32px] bg-Background flex flex-col items-end justify-start pt-[39px] px-0 pb-[57px] box-border gap-[34px] min-w-[318px] max-w-full text-center text-[56px] text-Text-Muted font-[Afacad] mq450:gap-[17px] mq1000:pt-[25px] mq1000:pb-[37px] mq1000:box-border ${className}`}
    >
      <div className="self-stretch h-[565px] relative rounded-[32px] bg-Background hidden" />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-2 pl-[21px] pr-5 text-left">
        <div className="flex flex-col items-start justify-start">
          <h2
            className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1] mq450:text-[34px] mq1000:text-[45px]"
            style={valueSignStyle}
          >
            {valueSign}
          </h2>
          <div className="flex flex-row items-start justify-start py-0 pl-[33px] pr-[34px] mt-[-10px] relative text-3xl">
            <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1] mq450:text-lg mq1000:text-2xl">
              Per Month
            </h2>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src={vector13}
      />
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[42px] pb-[17px] box-border max-w-full text-[28px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full"
          style={innerPlanStyle}
        >
          <div
            className="self-stretch flex flex-row items-start justify-start py-0 px-[114px] mq450:pl-5 mq450:pr-5 mq450:box-border"
            style={planTitleStyle}
          >
            <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] z-[1] mq450:text-[22px]">
              {basicPlan}
            </h2>
          </div>
          <button className="cursor-pointer [border:none] pt-1.5 px-[120px] pb-[9px] bg-Text-Muted self-stretch rounded-[45px] flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-[#858c99] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-11 w-[340px] relative rounded-[45px] bg-Text-Muted hidden max-w-full" />
            <b className="relative text-[22px] font-[Afacad] text-[#fff] text-center z-[1]">
              Get Started
            </b>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[60px] pr-[59px] text-2xl mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] z-[1]">
          <div className="self-stretch flex flex-row items-start justify-start gap-3 mq450:flex-wrap">
            <img
              className="h-[35px] w-[35px] relative"
              loading="lazy"
              alt=""
              src="/group-57.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[168px]">
              <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-[19px]">
                Lorem ipsum dolor sit amet
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-3 mq450:flex-wrap">
            <img
              className="h-[35px] w-[35px] relative"
              loading="lazy"
              alt=""
              src="/group-57.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[168px]">
              <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-[19px]">
                Lorem ipsum dolor sit amet
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-3 mq450:flex-wrap">
            <img
              className="h-[35px] w-[35px] relative"
              loading="lazy"
              alt=""
              src="/group-57.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[168px]">
              <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-[19px]">
                Lorem ipsum dolor sit amet
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  valueSign: PropTypes.string,
  vector13: PropTypes.string,
  basicPlan: PropTypes.string,

  /** Style props */
  valueSignTextAlign: PropTypes.string,
  innerPlanAlignItems: PropTypes.string,
  planTitleJustifyContent: PropTypes.string,
  planTitlePadding: PropTypes.string,
};

export default GroupComponent2;
