import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import CoverLetterForm from './CoverLetterForm';

export default function CoverLetterList() {
  const [letters, setLetters] = useState([]);

  const fetchLetters = async () => {
    try {
      const res = await axios.get('/coverletters/my/');
      setLetters(res.data);
    } catch (err) {
      console.error("Failed to fetch cover letters", err);
    }
  };

  const downloadPDF = async (letterId) => {
    try {
      const res = await axios.get(`/coverletters/${letterId}/download/`, {
        responseType: 'blob'  // So Axios treats it as binary
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `cover_letter_${letterId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download. Make sure you're logged in.");
    }
  };

  useEffect(() => {
    fetchLetters();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Cover Letters</h1>
      <CoverLetterForm onSuccess={fetchLetters} />
      <ul className="mt-6 space-y-2">
        {letters.map(letter => (
          <li key={letter.id} className="border p-3">
            <strong>{letter.job_title} at {letter.company}</strong><br />
            <button
              onClick={() => downloadPDF(letter.id)}
              className="text-blue-600 underline"
            >
              Download PDF
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
