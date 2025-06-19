import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

const TemplateOptions = ({ className = "", formData, setGeneratedResume }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [gradingFeedback, setGradingFeedback] = useState(null);
  const [pdfToGrade, setPdfToGrade] = useState(null);

  const handleGenerateCoverLetter = async () => {
    try {
      const response = await axios.post("http://localhost:8000/coverletters/generate/", {
        name: formData.name,
        experience: formData.experience,
        resume_text: formData.summary,
        job_description: formData.job_description,
        company: formData.job_company,
        job_title: formData.job_title,
      });

      setGeneratedResume(response.data.cover_letter);
      alert("Cover letter generated successfully!");
    } catch (err) {
      console.error("Cover letter generation failed:", err);
      alert("Something went wrong while generating the cover letter.");
    }
  };

  const handleSelectFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfToGrade(file);
      setGradingFeedback(null);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSubmitGrade = async () => {
    if (!pdfToGrade) {
      alert("Please select a PDF file to grade.");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfToGrade);

    try {
      const response = await axios.post("http://localhost:8000/coverletters/grade/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setGradingFeedback(response.data);
    } catch (error) {
      console.error("Grading failed:", error);
      alert("Grading failed. Please try again.");
    }
  };

  return (
    <div
      className={`self-stretch flex-1 flex flex-row items-start justify-start gap-7 max-w-full text-center text-3xl text-Text-Muted font-[Afacad] mq1000:flex-wrap ${className}`}
    >
      {/* Cover Letter Grader */}
      <div className="self-stretch flex-[0.9065] rounded-2xl bg-[#f4f4f4] flex flex-col items-center justify-start pt-[38px] px-[53px] pb-10 gap-[25px] z-[6] mq450:pt-[25px] mq450:px-5 mq450:pb-[26px] mq450:box-border mq450:flex-1">
        <div className="w-[300px] h-[357px] relative rounded-2xl bg-[#f4f4f4] hidden" />
        <div className="self-stretch flex-1 flex flex-row items-center justify-center py-0 px-6">
          <div className="flex flex-col items-center justify-center gap-[18px]">
            <div className="flex items-center justify-center">
              <img className="h-28 w-28 relative z-[1]" alt="" src="/vector-22.svg" />
            </div>
            <h3 className="m-0 relative font-normal z-[1] text-center mq450:text-lg mq1000:text-2xl">
              <p className="m-0">Grade</p>
              <p className="m-0">Resume or Cover Letter</p>
            </h3>
          </div>
        </div>

        {/* Upload PDF Button */}
        <button
          onClick={() => fileInputRef.current.click()}
          className="cursor-pointer pt-[7px] px-[45px] pb-2 bg-purple-600 rounded-[45px] flex flex-row items-center justify-center gap-[5px] z-[1] text-white text-[22px] hover:bg-purple-700"
        >
          Upload PDF to Grade
        </button>

        {/* Hidden file input */}
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          ref={fileInputRef}
          onChange={handleSelectFile}
        />

        {/* Submit Button */}
        {pdfToGrade && (
          <button
            onClick={handleSubmitGrade}
            className="mt-4 cursor-pointer pt-[7px] px-[45px] pb-2 bg-green-600 rounded-[45px] flex flex-row items-center justify-center gap-[5px] text-white text-[22px] hover:bg-green-700"
          >
            Submit for Grading
          </button>
        )}

        {/* Show feedback if available */}
        {gradingFeedback && (
          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4 w-full max-w-md text-sm text-gray-800">
            <p><strong>Grade:</strong> {gradingFeedback.grade}</p>
            <p><strong>Feedback:</strong> {gradingFeedback.feedback}</p>
            <p><strong>Word Count:</strong> {gradingFeedback.word_count}</p>
          </div>
        )}
      </div>
    </div>
  );
};

TemplateOptions.propTypes = {
  className: PropTypes.string,
  formData: PropTypes.object.isRequired,
  setGeneratedResume: PropTypes.func.isRequired,
};

export default TemplateOptions;
