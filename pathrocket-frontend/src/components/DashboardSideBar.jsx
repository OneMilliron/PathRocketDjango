import PropTypes from "prop-types";

const DashboardSideBar = ({ className = "" }) => {
  return (
    <section
      className={`h-[888px] w-[293px] flex flex-col items-start justify-start pt-9 px-0 pb-[38px] box-border relative gap-[77px] z-[76] text-left text-[22px] text-[rgba(255,255,255,0.8)] font-[Afacad] mq1000:hidden ${className}`}
    >
      <div className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl bg-[#2e3544] z-[0]" />
      <div className="w-[253.5px] h-[65px] flex flex-row items-start justify-start py-0 pl-[41px] pr-0 box-border z-[1]">
        <img
          className="w-[212.5px] relative h-[65px]"
          alt=""
          src="/path-roeckt-logo1.svg"
        />
      </div>
      <div className="w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-Primary h-[59px] hidden z-[2]" />
      <div className="w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-Primary h-[59px] hidden z-[3]" />
      <div className="w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-Primary h-[59px] hidden z-[4]" />
      <div className="w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-Primary h-[59px] hidden z-[5]" />
      <div className="w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-Primary h-[59px] hidden z-[6]" />
      <div className="w-[293px] h-[566px] flex flex-col items-end justify-start pt-0 px-0 pb-[68px] box-border gap-[75px] z-[10]">
        <div className="w-[246px] h-[234px] flex flex-row items-start justify-end py-0 pl-0 pr-[39px] box-border">
          <div className="h-[234px] w-[207px] flex flex-col items-start justify-start gap-[38.3px]">
            <div className="w-[140px] h-[29px] flex flex-row items-start justify-start py-0 pl-px pr-0 box-border">
              <div className="h-[29px] w-[139px] flex flex-row items-start justify-start gap-[19px]">
                <div className="h-[26px] w-[23px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border z-[2]">
                  <div className="w-[23px] relative h-[23px]">
                    <div className="absolute h-[43.48%] w-[43.48%] top-[0%] right-[56.52%] bottom-[56.52%] left-[0%] bg-[rgba(255,255,255,0.8)]" />
                    <div className="absolute h-[43.48%] w-[43.48%] top-[56.52%] right-[56.52%] bottom-[0%] left-[0%] bg-[rgba(255,255,255,0.8)]" />
                    <div className="absolute h-[43.48%] w-[43.48%] top-[0%] right-[0%] bottom-[56.52%] left-[56.52%] bg-[rgba(255,255,255,0.8)]" />
                    <div className="absolute h-[43.48%] w-[43.48%] top-[56.52%] right-[0%] bottom-[0%] left-[56.52%] bg-[rgba(255,255,255,0.8)]" />
                  </div>
                </div>
                <h3 className="m-0 w-[97px] relative text-[length:inherit] font-semibold font-[inherit] inline-block z-[1]">
                  Dashboard
                </h3>
              </div>
            </div>
            <div className="w-[133px] h-[30px] flex flex-row items-start justify-start gap-3">
              <img
                className="h-[30px] w-[31px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/group-24.svg"
              />
              <div className="h-[30px] w-[90px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border z-[1]">
                <h3 className="m-0 w-[90px] relative text-[length:inherit] font-normal font-[inherit] inline-block">
                  Job Finder
                </h3>
              </div>
            </div>
            <div className="w-[207px] h-[31px] flex flex-row items-start justify-start relative text-[#fff]">
              <div className="h-[59px] w-[280px] absolute !!m-[0 important] top-[calc(50%_-_29.5px)] right-[-39px] rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-Primary z-[0]" />
              <div className="h-[31px] w-[207px] flex flex-row items-start justify-start gap-3 z-[1]">
                <img
                  className="h-[31px] w-[31px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-72.svg"
                />
                <div className="h-[31px] w-[164px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border z-[1]">
                  <h3 className="m-0 w-[164px] relative text-[length:inherit] font-normal font-[inherit] inline-block">
                    Resume Generator
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[188px] h-[29px] flex flex-row items-start justify-start py-0 pl-px pr-0 box-border">
              <div className="h-[29px] w-[187px] flex flex-row items-start justify-start gap-2.5">
                <img
                  className="h-[27px] w-8 relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <h3 className="m-0 w-[145px] relative text-[length:inherit] font-normal font-[inherit] inline-block z-[1]">
                  Ai Chat Assistant
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[293px] h-[189px] flex flex-col items-start justify-start gap-[39px] text-lg text-[#fff]">
          <div className="w-[293px] h-[119px] flex flex-col items-start justify-start gap-6">
            <div className="w-[164px] h-6 flex flex-row items-start justify-start py-0 pl-[47px] pr-0 box-border">
              <div className="w-[117px] relative inline-block">{`Help & Support :`}</div>
            </div>
            <div className="w-[293px] h-[71px] flex flex-col items-start justify-start gap-[42px] text-[22px] text-[rgba(255,255,255,0.8)]">
              <img
                className="w-[293px] relative h-px z-[2]"
                alt=""
                src="/vector-9.svg"
              />
              <div className="w-[211px] h-[29px] flex flex-row items-start justify-start py-0 pl-[49px] pr-0 box-border z-[1]">
                <div className="h-[29px] w-[162px] flex flex-row items-start justify-start">
                  <div className="w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-[#a5adbd] h-[59px] hidden" />
                  <div className="h-[29px] w-[162px] flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-[29px] w-[29px] relative z-[2]"
                      loading="lazy"
                      alt=""
                      src="/vector-21.svg"
                    />
                    <h3 className="m-0 w-[121px] relative text-[length:inherit] font-normal font-[inherit] inline-block z-[1]">{`Help & Center`}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-40 h-[31px] flex flex-row items-start justify-start py-0 pl-[49px] pr-0 box-border text-[22px] text-[rgba(255,255,255,0.8)]">
            <div className="h-[31px] w-[111px] flex flex-row items-start justify-start">
              <div className="w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-[#a5adbd] h-[59px] hidden" />
              <div className="h-[31px] w-[111px] flex flex-row items-start justify-start gap-3">
                <div className="h-[31px] w-[29px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border z-[2]">
                  <img
                    className="w-[29px] h-[29px] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
                <h3 className="m-0 w-[70px] relative text-[length:inherit] font-normal font-[inherit] inline-block z-[1]">
                  Settings
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[161px] h-[29px] flex flex-row items-start justify-start py-0 pl-12 pr-0 box-border z-[9]">
        <div className="h-[29px] w-[113px] flex flex-row items-start justify-start">
          <div className="w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-[#a5adbd] h-[59px] hidden" />
          <div className="h-[29px] w-[113px] flex flex-row items-start justify-start gap-[11px]">
            <div className="h-[29px] w-[31px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border z-[2]">
              <img
                className="w-[31px] h-7 relative object-contain"
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <h3 className="m-0 w-[71px] relative text-[length:inherit] font-normal font-[inherit] inline-block z-[1]">
              Log Out
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

DashboardSideBar.propTypes = {
  className: PropTypes.string,
};

export default DashboardSideBar;
