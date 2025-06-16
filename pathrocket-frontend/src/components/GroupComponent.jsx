import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  frameDivPadding,
  frameDivAlignSelf,
  savedJobs,
  separators,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  return (
    <div
      className={`flex-1 rounded-2xl bg-[#fff] border-Line-Gray border-solid border-[2px] box-border flex flex-row items-end justify-start pt-6 pb-[25px] pl-[23px] pr-3.5 gap-5 min-w-[221px] text-left text-[22px] text-[#000] font-[Afacad] mq450:flex-wrap ${className}`}
    >
      <div className="h-[124px] w-[300px] relative rounded-2xl bg-[#fff] border-Line-Gray border-solid border-[2px] box-border hidden" />
      <img
        className="h-[69.5px] w-0.5 relative z-[1]"
        alt=""
        src="/vector-11.svg"
      />
      <div
        className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7.5px] box-border min-w-[107px]"
        style={frameDivStyle}
      >
        <div
          className="flex flex-col items-start justify-start gap-px"
          style={frameDiv1Style}
        >
          <h3 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] z-[1] mq450:text-lg">
            {savedJobs}
          </h3>
          <div className="flex flex-row items-start justify-start gap-1 text-lg text-Text-Muted">
            <div className="relative z-[1]">View All</div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-3 h-[7.4px] relative z-[1]"
                alt=""
                src="/arrow-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="m-0 relative text-[50px] font-semibold font-[inherit] text-[rgba(107,114,128,0.2)] z-[1] mq450:text-3xl mq1000:text-[40px]">
        {separators}
      </h2>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  savedJobs: PropTypes.string,
  separators: PropTypes.string,

  /** Style props */
  frameDivPadding: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
};

export default GroupComponent;
