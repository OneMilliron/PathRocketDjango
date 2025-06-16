import FrameComponent from "./FrameComponent";
import GroupComponent2 from "./GroupComponent2";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[115px] pl-[21px] pr-5 box-border max-w-full mq1000:pb-[49px] mq1000:box-border mq725:pb-[75px] mq725:box-border ${className}`}
    >
      <div className="w-[1351px] flex flex-col items-start justify-start gap-[46px] max-w-full mq1000:gap-[23px]">
        <FrameComponent
          frameSectionAlignSelf="unset"
          frameSectionPadding="0px 2px"
          frameSectionWidth="1340px"
          ourTestimonials="Pricing"
        />
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[39.5px] max-w-full mq1000:gap-5">
          <GroupComponent2
            valueSign="$14.99/-"
            vector13="/vector-13.svg"
            basicPlan="Basic Plan"
          />
          <section className="flex-1 rounded-[32px] bg-Primary flex flex-col items-end justify-start pt-[39px] px-0 pb-[57px] box-border gap-[34px] min-w-[318px] max-w-full text-center text-[56px] text-[#fff] font-[Afacad] mq450:gap-[17px] mq1000:pt-[25px] mq1000:pb-[37px] mq1000:box-border">
            <div className="self-stretch h-[665px] relative rounded-[32px] bg-Primary hidden" />
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-2 pl-[21px] pr-5 text-left">
              <div className="flex flex-col items-start justify-start">
                <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1] mq450:text-[34px] mq1000:text-[45px]">
                  $14.99/-
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
              src="/vector-13-1.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[42px] pb-[17px] box-border max-w-full text-[28px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-[21px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[39px] pr-[38px]">
                  <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] z-[1] mq450:text-[22px]">
                    Best plan for individuals
                  </h2>
                </div>
                <button className="cursor-pointer [border:none] pt-1.5 px-[120px] pb-[9px] bg-[#fff] self-stretch rounded-[45px] flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-[#e6e6e6] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="h-11 w-[340px] relative rounded-[45px] bg-[#fff] hidden max-w-full" />
                  <b className="relative text-[22px] font-[Afacad] text-Primary text-center z-[1]">
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
                    src="/group-57-3.svg"
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
                    src="/group-57-3.svg"
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
                    src="/group-57-3.svg"
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
                    src="/group-57-3.svg"
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
                    src="/group-57-3.svg"
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
          <GroupComponent2
            valueSign="$30.99/-"
            valueSignTextAlign="center"
            vector13="/vector-13.svg"
            innerPlanAlignItems="flex-end"
            planTitleJustifyContent="flex-end"
            planTitlePadding="0px 21px 0px 22px"
            basicPlan="Ideal plan for Professionals"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
