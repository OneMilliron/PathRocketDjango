import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  frameSectionAlignSelf,
  frameSectionPadding,
  frameSectionWidth,
  ourTestimonials,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      alignSelf: frameSectionAlignSelf,
      padding: frameSectionPadding,
      width: frameSectionWidth,
    };
  }, [frameSectionAlignSelf, frameSectionPadding, frameSectionWidth]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-3 box-border max-w-full text-left text-[50px] text-Primary font-[Afacad] ${className}`}
      style={frameSectionStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-0.5 max-w-full">
        <div className="flex flex-row items-start justify-start gap-[17.5px] max-w-full">
          <img className="h-[72px] w-1 relative" alt="" src="/vector-8.svg" />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-[calc(100%_-_21px)]">
            <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-3xl mq1000:text-[40px]">
              {ourTestimonials}
            </h2>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[18px] pr-0 text-[26px] text-Text-Muted">
          <div className="relative mq450:text-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  ourTestimonials: PropTypes.string,

  /** Style props */
  frameSectionAlignSelf: PropTypes.string,
  frameSectionPadding: PropTypes.string,
  frameSectionWidth: PropTypes.string,
};

export default FrameComponent;
