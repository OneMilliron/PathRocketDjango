import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "", group48, maskGroup, vector12 }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[24.5px] min-w-[318px] max-w-full text-left text-lg text-[#fff] font-[Afacad] ${className}`}
    >
      <div className="self-stretch rounded-2xl bg-Primary flex flex-col items-start justify-start pt-[34px] pb-[33px] pl-[35px] pr-5 box-border gap-[47px] max-w-full mq450:gap-[23px]">
        <div className="w-[424px] h-[225px] relative rounded-2xl bg-Primary hidden max-w-full" />
        <div className="w-[356px] relative leading-[160%] inline-block max-w-full z-[1]">
          Lorem ipsum dolor sit ame consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <img
          className="w-[120px] h-6 relative z-[1]"
          loading="lazy"
          alt=""
          src={group48}
        />
      </div>
      <div className="w-[201px] flex flex-row items-start justify-start py-0 px-[23px] box-border text-base text-text-color font-[Poppins]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[17.5px]">
          <img
            className="h-16 w-16 relative object-cover"
            loading="lazy"
            alt=""
            src={maskGroup}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                <div className="mb-[-2px] relative font-semibold shrink-0">
                  Nora
                </div>
              </div>
              <div className="self-stretch relative text-sm text-[rgba(28,28,28,0.6)] shrink-0">
                Student
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-4px]"
        alt=""
        src={vector12}
      />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  group48: PropTypes.string,
  maskGroup: PropTypes.string,
  vector12: PropTypes.string,
};

export default GroupComponent1;
