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

      {/* Everything below is commented out except the Resume Generator */}
      {/* 
      <div className="w-[280px] ...">...</div>
      <div className="w-[280px] ...">...</div>
      <div className="w-[280px] ...">...</div>
      <div className="w-[280px] ...">...</div>
      */}

      <div className="w-[293px] h-[566px] flex flex-col items-end justify-start pt-0 px-0 pb-[68px] box-border gap-[75px] z-[10]">
        <div className="w-[246px] h-[234px] flex flex-row items-start justify-end py-0 pl-0 pr-[39px] box-border">
          <div className="h-[234px] w-[207px] flex flex-col items-start justify-start gap-[38.3px]">
            {/* Resume Generator panel - the only one left */}
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

            {/* 
            <div className="...">Dashboard(soon)</div>
            <div className="...">Jobs(soon)</div>
            <div className="...">Ai Chat Assistant</div>
            */}
          </div>
        </div>
      </div>

      {/* 
      <div className="...">Help & Support</div>
      <div className="...">Settings</div>
      <div className="...">Log Out</div>
      */}
    </section>
  );
};

DashboardSideBar.propTypes = {
  className: PropTypes.string,
};

export default DashboardSideBar;
