import FrameComponent from "./FrameComponent";
import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[115px] box-border max-w-full mq1000:pb-[75px] mq1000:box-border ${className}`}
    >
      <div className="w-[1350px] flex flex-col items-start justify-start gap-[55px] max-w-full mq1000:gap-[27px]">
        <FrameComponent ourTestimonials="Our Testimonials" />
        <section className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[39px] max-w-full text-left text-lg text-[#fff] font-[Afacad] mq1000:gap-[19px]">
          <GroupComponent1
            group48="/group-48.svg"
            maskGroup="/mask-group@2x.png"
            vector12="/vector-12.svg"
          />
          <GroupComponent1
            group48="/group-48.svg"
            maskGroup="/mask-group-1@2x.png"
            vector12="/vector-12.svg"
          />
          <GroupComponent1
            group48="/group-48.svg"
            maskGroup="/mask-group-2@2x.png"
            vector12="/vector-12.svg"
          />
        </section>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
