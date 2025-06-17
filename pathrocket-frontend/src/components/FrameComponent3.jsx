import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-Background flex flex-col items-start justify-start pt-[70px] px-[287px] pb-[582px] box-border gap-0.5 min-h-[802px] max-w-full text-left text-[50px] text-Primary font-[Afacad] mq450:pt-[29px] mq450:pb-[246px] mq450:box-border mq1000:pt-[45px] mq1000:px-[71px] mq1000:pb-[378px] mq1000:box-border mq725:pl-[143px] mq725:pr-[143px] mq725:box-border ${className}`}
    >
      <div className="w-[1920px] h-[802px] relative bg-Background hidden max-w-full" />
      <div className="flex flex-row items-start justify-start gap-[17.5px] max-w-full">
        <img
          className="h-[72px] w-1 relative z-[1]"
          alt=""
          src="/vector-8.svg"
        />
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] z-[1] mq450:text-3xl mq1000:text-[40px]">
            Our Dashboard (Coming Soon)
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[18px] pr-2.5 text-[26px] text-Text-Muted">
        <div className="relative z-[1] mq450:text-[21px]">
          Everything you need, in one simple view. Track your resume and cover
          letter drafts, browse tailored job listings near you, and get
          real-time feedback — all from an easy-to-use dashboard designed for
          first-time job seekers.
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
