import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const DashboardWrapper = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[285px] box-border max-w-full mt-[-529px] relative text-left text-[22px] text-Text-Main font-[Afacad] mq1000:pl-[71px] mq1000:pr-[71px] mq1000:box-border mq725:pl-[142px] mq725:pr-[142px] mq725:box-border ${className}`}
    >
      <div className="flex-1 shadow-[0px_4px_43px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-[#fff] flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="self-stretch w-[1350px] relative shadow-[0px_4px_43px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-[#fff] hidden max-w-full" />
        <div className="h-[59px] w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-[#a5adbd] hidden" />
        <div className="h-[59px] w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-[#a5adbd] hidden" />
        <div className="h-[59px] w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-[#a5adbd] hidden" />
        <section className="h-[888px] rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl bg-[#2e3544] flex flex-col items-start justify-start pt-[27px] px-0 pb-[38px] box-border gap-[68px] z-[1] text-left text-[22px] text-[#fff] font-[Afacad] mq450:gap-[34px] mq450:pb-5 mq450:box-border mq725:hidden mq725:pt-[549px] mq725:pb-[25px] mq725:box-border">
          <div className="self-stretch h-[888px] relative rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl bg-[#2e3544] hidden" />
          <div className="flex flex-row items-start justify-start py-0 px-[37px]">
            <img
              className="h-[67px] w-[219px] relative z-[2]"
              loading="lazy"
              alt=""
              src="/path-roeckt-logo-1.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[143px] gap-12 mq450:gap-6 mq1000:pb-[93px] mq1000:box-border">
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <div className="self-stretch rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-Primary flex flex-row items-start justify-start pt-4 px-[35px] pb-3.5 gap-[19px] z-[2]">
                <div className="h-[59px] w-[280px] relative rounded-tl-[35px] rounded-tr-none rounded-br-none rounded-bl-[35px] bg-Primary hidden" />
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="w-[23px] h-[23px] relative">
                    <div className="absolute top-[0px] left-[0px] bg-[#fff] w-2.5 h-2.5 z-[3]" />
                    <div className="absolute top-[13px] left-[0px] bg-[#fff] w-2.5 h-2.5 z-[3]" />
                    <div className="absolute top-[0px] left-[13px] bg-[#fff] w-2.5 h-2.5 z-[3]" />
                    <div className="absolute top-[13px] left-[13px] bg-[#fff] w-2.5 h-2.5 z-[3]" />
                  </div>
                </div>
                <h3 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] z-[3] mq450:text-lg">
                  Dashboard
                </h3>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[34px] pr-[39px] text-[rgba(255,255,255,0.8)]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
                  <div className="flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-[30px] w-[31px] relative z-[2]"
                      loading="lazy"
                      alt=""
                      src="/group-24.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2] mq450:text-lg">
                        Job Finder
                      </h3>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-3 mq450:flex-wrap">
                    <img
                      className="h-[31px] w-[31px] relative z-[2]"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2] mq450:text-lg">
                        Resume Generator
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-px">
                    <div className="flex flex-row items-start justify-start gap-2.5 mq450:flex-wrap">
                      <img
                        className="h-[27px] w-8 relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2] mq450:text-lg">
                        Ai Chat Assistant
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-lg">
              <div className="flex flex-row items-start justify-start py-0 px-[47px]">
                <div className="relative z-[2]">{`Help & Support :`}</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[29px] text-[22px] text-[rgba(255,255,255,0.8)]">
                <img
                  className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[2]"
                  alt=""
                  src="/vector-9.svg"
                />
                <div className="flex flex-row items-start justify-start py-0 px-[49px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-[29px] w-[29px] relative z-[2]"
                      alt=""
                      src="/vector-21.svg"
                    />
                    <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2] mq450:text-lg">{`Help & Center`}</h3>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[49px]">
                  <div className="flex flex-row items-start justify-start gap-3">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-[29px] h-[29px] relative object-contain z-[2]"
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2] mq450:text-lg">
                      Settings
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-12 text-[rgba(255,255,255,0.8)]">
            <div className="flex flex-row items-start justify-start gap-[11px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[31px] h-7 relative object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
              <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2] mq450:text-lg">
                Log Out
              </h3>
            </div>
          </div>
        </section>
        <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-[calc(100%_-_293px)] mq725:max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-6 max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[11px] max-w-full">
              <div className="w-[1023px] flex flex-row items-start justify-end py-0 px-[17px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between gap-5 max-w-full mq725:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[11px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                        <h3 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] z-[1] mq450:text-lg">
                          Welcome Back, Jackson!
                        </h3>
                      </div>
                      <img
                        className="w-9 relative max-h-full object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/partypopperemoji1024x992pptutsnw-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="w-[544px] flex flex-row items-start justify-start gap-[38px] max-w-full mq1000:gap-[19px] mq1000:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[194px]">
                      <div className="self-stretch flex flex-row items-end justify-between pt-[7px] pb-2.5 pl-[33px] pr-[22px] relative gap-5 z-[1]">
                        <div className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[46px] bg-[rgba(255,255,255,0.35)] border-Text-Muted border-solid border-[1px] box-border" />
                        <input
                          className="w-[73px] [border:none] [outline:none] font-[Afacad] text-[22px] bg-[transparent] relative text-Text-Muted text-left inline-block p-0 z-[1] mq450:text-lg"
                          placeholder="Search..."
                          type="text"
                        />
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
                          <img
                            className="w-[21px] h-[21px] relative z-[1]"
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[207px] flex flex-row items-end justify-between gap-5">
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
                        <img
                          className="w-px h-[46px] relative z-[1]"
                          alt=""
                          src="/vector-10.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
                        <img
                          className="w-[29px] h-7 relative z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector-6.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3.5">
                        <img
                          className="w-5 h-[23px] relative z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector-71.svg"
                        />
                      </div>
                      <img
                        className="h-[52px] w-[52px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group-35@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[3px] relative bg-Line-Gray z-[2]" />
            </div>
            <section className="self-stretch flex flex-row items-start justify-end py-0 pl-[51px] pr-[50px] box-border max-w-full text-left text-3xl text-[#fff] font-[Afacad] mq725:pl-[25px] mq725:pr-[25px] mq725:box-border">
              <div className="flex-1 rounded-2xl bg-Primary flex flex-row items-start justify-start py-[50px] px-[69px] box-border relative max-w-full z-[1] mq1000:pl-[34px] mq1000:pr-[34px] mq1000:box-border">
                <div className="h-[181px] w-[956px] relative rounded-2xl bg-Primary hidden max-w-full z-[0]" />
                <h3 className="m-0 h-[81px] w-[366px] relative text-[length:inherit] font-semibold font-[inherit] flex items-center shrink-0 max-w-full z-[2] mq450:text-lg mq1000:text-2xl">{`Smart Tools to Help You Land Internships & Tech Jobs`}</h3>
                <img
                  className="h-[214px] w-[260.6px] absolute !!m-[0 important] top-[-33px] right-[20.4px] object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/group-4@2x.png"
                />
              </div>
            </section>
            <section className="self-stretch flex flex-row items-start justify-end py-0 pl-[51px] pr-[50px] box-border max-w-full text-left text-[22px] text-[#000] font-[Afacad] mq725:pl-[25px] mq725:pr-[25px] mq725:box-border">
              <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-7 max-w-full z-[1]">
                <GroupComponent savedJobs="Saved Jobs" separators="22" />
                <GroupComponent
                  frameDivPadding="0px 27px 7.5px 0px"
                  frameDivAlignSelf="stretch"
                  savedJobs="Apps Submitted"
                  separators="10"
                />
                <GroupComponent
                  frameDivPadding="0px 0px 7.5px"
                  frameDivAlignSelf="stretch"
                  savedJobs="Resume Generated"
                  separators="03"
                />
              </div>
            </section>
            <div className="self-stretch h-[3px] flex flex-row items-start justify-end py-0 pl-[51px] pr-[50px] box-border max-w-full mq725:pl-[25px] mq725:pr-[25px] mq725:box-border">
              <div className="self-stretch flex-1 relative bg-Line-Gray max-w-full z-[1]" />
            </div>
            <section className="self-stretch flex flex-row items-start justify-end py-0 pl-[51px] pr-[50px] box-border max-w-full text-center text-3xl text-Text-Muted font-[Afacad] mq725:pl-[25px] mq725:pr-[25px] mq725:box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-7 max-w-full mq725:flex-wrap">
                <div className="flex-[0.87] rounded-2xl bg-[#f4f4f4] flex flex-col items-end justify-start pt-[68px] px-[53px] pb-10 box-border gap-[41px] min-w-[225px] z-[1] mq450:gap-5 mq450:pt-[549px] mq450:px-5 mq450:pb-[26px] mq450:box-border mq450:flex-1">
                  <div className="w-[300px] h-[357px] relative rounded-2xl bg-[#f4f4f4] hidden" />
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-9 pr-[35px]">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[24.3px]">
                      <div className="flex flex-row items-start justify-end py-0 px-1">
                        <img
                          className="h-[99.7px] w-[103px] relative shrink-0 z-[2]"
                          loading="lazy"
                          alt=""
                          src="/group-24-1.svg"
                        />
                      </div>
                      <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] shrink-0 z-[2] mq450:text-lg mq1000:text-2xl">
                        Job Finder
                      </h2>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] pt-1.5 pb-[9px] pl-[47px] pr-[46px] bg-Primary rounded-[45px] flex flex-row items-start justify-start z-[2] hover:bg-[#7d80ff]">
                    <div className="h-11 w-[194px] relative rounded-[45px] bg-Primary hidden" />
                    <div className="relative text-[22px] font-[Afacad] text-[#fff] text-center z-[1]">
                      Get Started
                    </div>
                  </button>
                </div>
                <div className="flex-1 rounded-2xl bg-[#f4f4f4] flex flex-col items-start justify-start pt-[66px] pb-10 pl-[39px] pr-[38px] box-border gap-[41px] min-w-[225px] z-[1] mq450:gap-5 mq450:pt-[549px] mq450:pb-[26px] mq450:box-border">
                  <div className="w-[300px] h-[357px] relative rounded-2xl bg-[#f4f4f4] hidden" />
                  <div className="self-stretch flex flex-col items-end justify-start gap-[30px]">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[66px] pr-[61px]">
                      <img
                        className="h-24 w-24 relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-24-2.svg"
                      />
                    </div>
                    <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2] mq450:text-lg mq1000:text-2xl">
                      Resume Generator
                    </h2>
                  </div>
                  <button className="cursor-pointer [border:none] py-0 pl-3.5 pr-[15px] bg-[transparent] self-stretch flex flex-row items-start justify-start">
                    <div className="rounded-[45px] bg-Primary flex flex-row items-start justify-start pt-1.5 pb-[9px] pl-[47px] pr-[46px] z-[2]">
                      <div className="h-11 w-[194px] relative rounded-[45px] bg-Primary hidden" />
                      <div className="relative text-[22px] font-[Afacad] text-[#fff] text-center z-[1]">
                        Get Started
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex-[0.8879] rounded-2xl bg-[#f4f4f4] flex flex-col items-start justify-start pt-[68.8px] px-[51px] pb-10 box-border gap-[41px] min-w-[225px] z-[1] mq450:gap-5 mq450:pt-[549px] mq450:px-5 mq450:pb-[26px] mq450:box-border mq450:flex-1">
                  <div className="w-[300px] h-[357px] relative rounded-2xl bg-[#f4f4f4] hidden" />
                  <div className="self-stretch flex flex-col items-end justify-start gap-[32.9px]">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[46px] pr-[45px]">
                      <img
                        className="h-[90.3px] flex-1 relative max-w-full overflow-hidden z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-24-3.svg"
                      />
                    </div>
                    <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2] mq450:text-lg mq1000:text-2xl">
                      Ai Chat Assistant
                    </h2>
                  </div>
                  <button className="cursor-pointer [border:none] py-0 px-0.5 bg-[transparent] flex flex-row items-start justify-start">
                    <div className="rounded-[45px] bg-Primary flex flex-row items-start justify-start pt-1.5 pb-[9px] pl-[47px] pr-[46px] z-[2]">
                      <div className="h-11 w-[194px] relative rounded-[45px] bg-Primary hidden" />
                      <div className="relative text-[22px] font-[Afacad] text-[#fff] text-center z-[1]">
                        Get Started
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardWrapper.propTypes = {
  className: PropTypes.string,
};

export default DashboardWrapper;
