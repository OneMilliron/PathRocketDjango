import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import DashboardWrapper from "../components/DashboardWrapper";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";

const NextStepLandingPageFinal = () => {
  return (
    <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[17px] box-border gap-[15px] leading-[normal] tracking-[normal] text-left text-[22px] text-Text-Muted font-[Afacad]">
      <main className="w-[1985px] h-[1191px] absolute !!m-[0 important] top-[-9px] left-[-65px]">
        <img
          className="absolute top-[0px] left-[0px] w-[2010px] h-[1005px] object-contain mix-blend-soft-light z-[1]"
          alt=""
          src="/pattern@2x.png"
        />
        <div className="absolute top-[247px] left-[928px] w-[799px] h-[944px] z-[2]">
          <div className="absolute top-[95px] left-[151px] bg-[#8184ff] w-[303px] h-[663px]" />
          <div className="absolute top-[0px] left-[469px] bg-[#9799ff] w-[303px] h-[758px]" />
          <img
            className="absolute top-[23px] left-[0px] w-[799px] h-[921px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/cartoon-1@2x.png"
          />
        </div>
      </main>
      <div className="w-[387px] h-[82px] relative bg-[#fff] hidden max-w-full z-[1]" />
      <div className="w-[387px] h-[82px] relative border-[#fff] border-solid border-[2px] box-border hidden max-w-full z-[2]" />
      <FrameComponent2 />
      <div className="w-[233px] absolute !!m-[0 important] top-[1418px] left-[843px] max-h-full z-[1] flex items-center justify-center">
        <img
          className="w-full z-[1] object-contain absolute left-[0px] top-[0px] h-full [transform:scale(1.288)]"
          loading="lazy"
          alt=""
          src="/airesume-1@2x.png"
        />
      </div>
      <FrameComponent4 />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[115px] box-border max-w-full mq1000:pb-[49px] mq1000:box-border mq725:pb-[75px] mq725:box-border">
        <FrameComponent3 />
        <DashboardWrapper />
      </section>
      <img
        className="w-[23.6px] h-5 relative overflow-hidden shrink-0 hidden z-[7]"
        alt=""
        src="/faquoteleft.svg"
      />
      <FrameComponent5 />
      <FrameComponent6 />
      <FrameComponent7 />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full">
        <div className="w-[1351px] flex flex-row items-start justify-between gap-5 max-w-full mq1000:flex-wrap">
          <h3 className="m-0 relative text-[length:inherit] font-medium font-[inherit] inline-block max-w-full mq450:text-lg">
            © Copyright  2025   |   All Rights Reserved
          </h3>
          <h3 className="m-0 relative text-[length:inherit] font-medium font-[inherit] mq450:text-lg">{`Privacy Policy | Terms & Conditions `}</h3>
        </div>
      </div>
    </div>
  );
};

export default NextStepLandingPageFinal;
