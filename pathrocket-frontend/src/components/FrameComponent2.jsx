import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[169px] box-border max-w-full mq1000:pb-[71px] mq1000:box-border mq725:pb-[110px] mq725:box-border ${className}`}
    >
      <div className="flex-1 bg-Primary flex flex-col items-start justify-start pt-[30px] px-[285px] pb-[181.9px] box-border gap-[203px] max-w-full mq1000:gap-[51px] mq1000:pl-[71px] mq1000:pr-[71px] mq1000:pb-[77px] mq1000:box-border mq725:gap-[101px] mq725:pt-5 mq725:px-[142px] mq725:pb-[118px] mq725:box-border">
        <div className="w-[1920px] h-[996px] relative bg-Primary hidden max-w-full" />
        <section className="self-stretch flex flex-row items-end justify-between gap-5 top-[0] z-[99] sticky max-w-full text-center text-xl text-[#fff] font-[Afacad]">
          <img
            className="w-[326.9px] relative max-h-full max-w-full z-[2]"
            loading="lazy"
            alt=""
            src="/path-roeckt-logo.svg"
          />
          <div className="w-[898px] flex flex-col items-start justify-end pt-0 px-0 pb-[19px] box-border max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-start justify-between py-0 pl-0 pr-1.5 gap-5">
              <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                <div className="self-stretch h-[34.5px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[5.5px]">
                  <div className="flex flex-row items-start justify-start py-0 px-px">
                    <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2]">
                      Home
                    </h3>
                  </div>
                  <img
                    className="self-stretch h-0.5 relative max-w-full overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                <img
                  className="w-px h-6 relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2]">
                  About Us
                </h3>
              </div>
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                <img
                  className="w-px h-6 relative z-[2]"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              {/*<div className="w-[90px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
                <div className="self-stretch h-[27px] relative">
                  <h3 className="m-0 absolute top-[0px] left-[0px] text-[length:inherit] font-normal font-[inherit] inline-block min-w-[73px] whitespace-nowrap z-[2]">
                    Find Jobs
                  </h3>
                  <img
                    className="absolute top-[12px] left-[79px] w-[11px] h-1.5 object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src="/arrow-1-stroke.svg"
                  />
                </div>
              </div>*/}
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                <img
                  className="w-px h-6 relative z-[2]"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2]">
                  Pricing
                </h3>
              </div>
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                <img
                  className="w-px h-6 relative z-[2]"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-[9px]">
                <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[2]">
                  Contact Us
                </h3>
              </div>
              <button className="cursor-pointer border-[#fff] border-solid border-[1px] py-[11px] pl-[34px] pr-[33px] bg-[transparent] self-stretch flex flex-row items-start justify-start z-[2] hover:bg-[rgba(230,230,230,0.09)] hover:border-[#e6e6e6] hover:border-solid hover:hover:border-[1px] hover:box-border">
                <div className="h-[53px] w-[189px] relative border-[#fff] border-solid border-[1px] box-border hidden" />
                <b className="relative text-xl font-['Afacad_Flux'] text-[#fff] text-left z-[1]">
                  Start Now
                </b>
              </button>
            </div>
          </div>
        </section>
        <section className="w-[671px] flex flex-col items-start justify-start gap-16 max-w-full text-left text-[130px] text-[rgba(255,255,255,0.4)] font-[Afacad] mq450:gap-4 mq1000:gap-8">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="flex flex-row items-start justify-start relative">
                <h1 className="!!m-[0 important] absolute top-[-117px] left-[0px] text-[length:inherit] font-bold font-[inherit] z-[2] mq450:text-[32px] mq1000:text-[52px]">
                  Find.
                </h1>
                <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] text-[transparent] [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.7)] z-[3] mq450:text-[32px] mq1000:text-[52px]">
                  Apply.
                </h2>
              </div>
              <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] text-[#fff] z-[4] mt-[-37px] mq450:text-[32px] mq1000:text-[52px]">
                Succeed.
              </h2>
            </div>
            <h2 className="m-0 self-stretch relative text-[50px] font-semibold font-[inherit] text-[#fff] z-[5] mt-[-12px] mq450:text-3xl mq1000:text-[40px]">
              Your Job Search Starts Here.
            </h2>
          </div>
          <div className="w-[389px] flex flex-row items-start justify-start py-0 px-[39px] box-border max-w-full text-center text-[35px] text-Primary font-['Afacad_Flux']">
            <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end pt-0 px-0 pb-[1.1px] [row-gap:20px]">
              <h2 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] inline-block min-w-[197px] shrink-0 z-[4] mq450:text-[21px] mq1000:text-[28px]">
                Try Path Rocket Now
              </h2>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0 ml-[-17px] relative mq450:ml-0">
                <img
                  className="w-[25px] h-[22.1px] relative shrink-0 z-[5]"
                  loading="lazy"
                  alt=""
                  src="/arrow-2.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
