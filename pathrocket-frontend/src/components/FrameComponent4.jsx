import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1894px] flex flex-row items-start justify-center pt-0 px-5 pb-[115px] box-border max-w-full mq1000:pb-[49px] mq1000:box-border mq725:pb-[75px] mq725:box-border ${className}`}
    >
      <div className="w-[1398px] flex flex-col items-start justify-start gap-[17px] max-w-full">
        <section className="w-[1362px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
          <header className="flex-1 flex flex-col items-start justify-start gap-0.5 max-w-full text-left text-[50px] text-Primary font-[Afacad]">
            <div className="flex flex-row items-start justify-start gap-[17.5px]">
              <img
                className="h-[72px] w-1 relative"
                loading="lazy"
                alt=""
                src="/vector-8.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-3xl mq1000:text-[40px]">
                  How It Works?
                </h2>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[18px] pr-0 text-[26px] text-Text-Muted">
              <div className="h-[76px] flex-1 relative inline-block mq450:text-[21px]">
                Path Rocket helps you quickly build a polished resume and cover
                letter using AI trained on thousands of successful job
                applications. Then it shows you real local job openings that
                match your skills — no confusing filters or tech jargon. It’s
                everything you need to apply with confidence, all in one place.
              </div>
            </div>
          </header>
        </section>
        <div className="self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-2.5 box-border gap-[117px] max-w-full mq450:gap-[29px] mq1000:gap-[58px] mq725:flex-wrap">
          <section className="flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border min-w-[413px] max-w-full mq1000:min-w-full mq725:flex-1">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[313px] w-[313px] absolute !!m-[0 important] right-[49px] bottom-[1px] rounded-tl-[40px] rounded-tr-[50px] rounded-b-[40px] bg-Background" />
              <div className="flex-1 relative max-w-full max-h-full z-[1] flex items-center justify-center">
                <img
                  className="flex-1 overflow-hidden z-[1] object-contain absolute left-[0px] top-[0px] w-full h-full [transform:scale(1.224)]"
                  loading="lazy"
                  alt=""
                  src="/jobaggregator-1@2x.png"
                />
              </div>
            </div>
          </section>
          <section className="flex-1 flex flex-row items-end justify-between gap-5 min-w-[564px] max-w-full mq1000:flex-wrap mq1000:min-w-full">
            <div className="h-[322px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border min-w-[313px] mq1000:flex-1">
              <div className="self-stretch flex-1 relative rounded-tl-[40px] rounded-tr-[50px] rounded-b-[40px] bg-Background" />
            </div>
            <div className="flex flex-row items-start justify-start relative min-w-[468px] max-w-full mq1000:flex-1 mq1000:min-w-full">
              <div className="h-[313px] w-[313px] absolute !!m-[0 important] right-[77px] bottom-[9px] rounded-tl-[40px] rounded-tr-[50px] rounded-b-[40px] bg-Background" />
              <div className="flex-1 relative max-w-full max-h-full z-[1] flex items-center justify-center">
                <img
                  className="flex-1 overflow-hidden z-[1] object-contain absolute left-[0px] top-[0px] w-full h-full [transform:scale(1.197)] mq1000:flex-1"
                  loading="lazy"
                  alt=""
                  src="/aicoach-1@2x.png"
                />
              </div>
            </div>
          </section>
        </div>
        <section className="w-[1356px] flex flex-row items-start justify-center pt-0 px-5 pb-[5px] box-border max-w-full text-center text-[34px] text-Text-Main font-[Afacad]">
          <div className="w-[1150px] flex flex-row items-start justify-between gap-5 max-w-full mq1000:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
              <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-xl mq1000:text-[27px]">
                Job Aggregator
              </h2>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[15px]">
              <h3 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-xl mq1000:text-[27px]">
                <p className="m-0">AI Resume + Cover</p>
                <p className="m-0">Letter Generator</p>
              </h3>
            </div>
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
              <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-xl mq1000:text-[27px]">
                AI Job Coach
              </h2>
            </div>
          </div>
        </section>
        <section className="w-[1360px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full text-center text-[26px] text-Text-Muted font-[Afacad]">
          <div className="flex-1 flex flex-row items-start justify-center gap-[87px] max-w-full mq450:gap-[22px] mq1000:gap-[43px] mq725:flex-wrap">
            <div className="h-[202px] flex-1 relative inline-block min-w-[255px] max-w-full mq450:text-[21px] mq725:flex-1">
              We scan the web daily to surface the best, most relevant tech
              internships and entry-level jobs — no fluff, no noise. (This will
              be through some backend API)
            </div>
            <div className="flex-[0.9751] flex flex-col items-start justify-start py-0 pl-0 pr-2.5 box-border min-w-[261px] max-w-full mq725:flex-1">
              <div className="h-[202px] relative inline-block shrink-0 mq450:text-[21px]">
                Upload your resume or share your experience, and NeXtStep
                generates tailored, role-specific resumes and cover letters in
                seconds. (This will be a GPT wrapper)
              </div>
            </div>
            <div className="w-[370px] relative inline-block shrink-0 max-w-full mq450:text-[21px]">
              Chat with our GPT-powered assistant to get tips on interviews,
              networking, and navigating your job hunt. Think of it as your
              personal career coach, available 24/7. (Also GPT Wrapper)
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
