import { useState, useRef } from "react";
import axios from "axios";
import DashboardSideBar from "../components/DashboardSideBar";
import FrameComponent8 from "../components/FrameComponent8";
import TemplateOptions from "../components/TemplateOptions";

const ResumeGrader = () => {
  const fileInputRef = useRef(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [generatedResume, setGeneratedResume] = useState("");
  const [resumeId, setResumeId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    education: "",
    experience: "",
    skills: "",
    summary: "",
    additional_info: "",
    languages: "",
    job_title: "",
    job_company: "",
    job_description: ""
  });

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      linkedin: formData.linkedin,
      education: formData.education,
      experience: formData.experience,
      skills: formData.skills,
      summary: formData.summary,
      additional_info: formData.additional_info,
      languages: formData.languages,
      is_tailored: true,
      job: {
        title: formData.job_title,
        company: formData.job_company,
        description: formData.job_description,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/resumes/api/generate-resume/",
        payload
      );
      setGeneratedResume(response.data.resume);
      setResumeId(response.data.resume_id);
    } catch (error) {
      console.error("Resume generation failed:", error);
      alert("Something went wrong. Check the console.");
    }
  };

  const handleDownloadPdf = async () => {
    if (!resumeId) {
      alert("No resume to download yet.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/resumes/resume/${resumeId}/download/`,
        {
          responseType: 'blob',
        }
      );

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `resume_${resumeId}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download PDF:", error);
      alert("PDF download failed.");
    }
  };

  return (
    <div className="w-full flex bg-white shadow rounded-2xl overflow-hidden">
      <DashboardSideBar />
      <main className="flex-1 p-8 max-w-[calc(100%-293px)]">
        <FrameComponent8 />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-10 mt-10 text-black"
        >
          {/* Upload Resume */}
          <div className="flex-1 border-2 border-indigo-500 rounded-2xl p-6 flex flex-col items-center gap-6">
            <img src="/vector-16.svg" alt="Rocket" className="h-[120px]" />
            <button
              type="button"
              onClick={handleButtonClick}
              className="bg-Primary text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition"
            >
              Upload Resume
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            {pdfFile && <p className="text-sm mt-2">{pdfFile.name}</p>}
          </div>

          {/* Fill Your Info */}
          <div className="flex-1 border-2 border-gray-300 rounded-2xl p-6 flex flex-col gap-4">
            <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} className="border rounded px-4 py-2" required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border rounded px-4 py-2" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border rounded px-4 py-2" />
            <input type="text" name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={handleChange} className="border rounded px-4 py-2" />
            <input type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="border rounded px-4 py-2" required />
            <textarea name="experience" placeholder="Experience Summary" rows={3} value={formData.experience} onChange={handleChange} className="border rounded px-4 py-2" required />
            <input type="text" name="skills" placeholder="Skills (comma-separated)" value={formData.skills} onChange={handleChange} className="border rounded px-4 py-2" required />
            <textarea name="summary" placeholder="Professional Summary" rows={3} value={formData.summary} onChange={handleChange} className="border rounded px-4 py-2" required />
            <input type="text" name="languages" placeholder="Languages (e.g., English, Spanish)" value={formData.languages} onChange={handleChange} className="border rounded px-4 py-2" />
            <textarea name="additional_info" placeholder="Additional Info (e.g., certifications, hobbies)" rows={2} value={formData.additional_info} onChange={handleChange} className="border rounded px-4 py-2" />
            <hr className="my-4" />
            <h3 className="text-lg font-semibold">Job Posting (Optional)</h3>
            <input type="text" name="job_title" placeholder="Job Title" value={formData.job_title} onChange={handleChange} className="border rounded px-4 py-2" />
            <input type="text" name="job_company" placeholder="Company Name" value={formData.job_company} onChange={handleChange} className="border rounded px-4 py-2" />
            <textarea name="job_description" placeholder="Job Description" rows={3} value={formData.job_description} onChange={handleChange} className="border rounded px-4 py-2" />
            <button type="submit" className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
              Submit for Resume Generation
            </button>
          </div>
        </form>

        {/* Generated Resume Output */}
        {generatedResume && (
          <div className="mt-10 border border-green-400 rounded p-6 text-gray-800 bg-green-50">
            <h2 className="text-xl font-bold mb-4">Generated Resume:</h2>
            <pre className="whitespace-pre-wrap">{generatedResume}</pre>
            {resumeId && (
              <button
                onClick={handleDownloadPdf}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Download as PDF
              </button>
            )}
          </div>
        )}

        <section className="mt-10">
          <TemplateOptions />
        </section>
      </main>
    </div>
  );
};

export default ResumeGrader;
