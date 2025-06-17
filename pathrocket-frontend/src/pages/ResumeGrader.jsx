import DashboardSideBar from "../components/DashboardSideBar";
import FrameComponent8 from "../components/FrameComponent8";
import TemplateOptions from "../components/TemplateOptions";
import { useRef } from "react";

const ResumeGrader = () => {
  const fileInputRef = useRef(null);

const handleButtonClick = () => {
  fileInputRef.current.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type === "application/pdf") {
    console.log("Selected file:", file.name);
  } else {
    alert("Please select a PDF file.");
  }
};

  return (
    <div className="w-full relative shadow-[0px_4px_43px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-[#fff] overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] z-[5] text-left text-[22px] text-Text-Muted font-[Afacad] mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
      <section className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4px_43px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-[#fff] z-[5]" />
      <DashboardSideBar />
      <main className="flex-1 flex flex-col items-end justify-start gap-5 max-w-[calc(100%_-_293px)] mq1000:max-w-full">
        <FrameComponent8 />
        <section className="self-stretch flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full text-center text-[22px] text-[#fff] font-[Afacad] mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full mq1000:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start relative min-w-[303px] max-w-full mq1000:flex-1">
              <div className="flex-1 rounded-2xl bg-[#fff] border-Primary border-solid border-[2px] box-border flex flex-col items-end justify-start pt-[11px] px-3 pb-20 gap-[41px] max-w-full z-[6] mq450:gap-5 mq450:pt-5 mq450:pb-[52px] mq450:box-border">
                <img
                  className="w-7 h-7 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-6427.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
                  <div className="flex flex-col items-start justify-start gap-9">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-10">
                      <img
                        className="h-[121px] flex-1 relative max-w-full overflow-hidden z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-16.svg"
                      />
                    </div>
                    <button
  type="button"
  onClick={handleButtonClick}
  className="rounded-[45px] bg-Primary flex flex-row items-center justify-center pt-[7px] px-[42px] pb-2 z-[1] hover:bg-indigo-600 transition"
>
  <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1] text-white">
    Upload Resume
  </h3>
</button>

<input
  ref={fileInputRef}
  type="file"
  accept="application/pdf"
  style={{ display: "none" }}
  onChange={handleFileChange}
/>


                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.9399] rounded-2xl bg-[#fff] border-Line-Gray border-solid border-[2px] box-border flex flex-col items-end justify-start pt-[11px] px-3 pb-20 gap-[42.5px] min-w-[303px] max-w-full z-[6] text-Text-Muted mq450:gap-[21px] mq450:pt-5 mq450:pb-[52px] mq450:box-border mq1000:flex-1">
              <img
                className="w-7 h-7 relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-6427-1.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <img
                  className="h-[113px] w-[102px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-17.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[90px] pr-[89px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 rounded-[45px] bg-Line-Gray flex flex-row items-start justify-start pt-[7px] pb-2 pl-[42px] pr-[41px] z-[1] mq450:pl-5 mq450:box-border">
                  <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1]">
                    Fill Your Information
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch h-[357px] flex flex-row items-start justify-end py-0 pl-[51px] pr-[50px] box-border max-w-full mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
          <TemplateOptions />
        </section>
      </main>
    </div>
  );
};

export default ResumeGrader;
