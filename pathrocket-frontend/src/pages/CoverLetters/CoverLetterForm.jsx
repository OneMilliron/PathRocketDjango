import { useState } from 'react';
import axios from '../../api/axios';

export default function CoverLetterForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    experience: '',
    resume_text: '',
    job_description: '',
    company: '',
    job_title: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.post('/coverletters/generate/', form);
      setMessage('✅ Cover letter generated!');
      if (onSuccess) onSuccess(res.data);
    } catch (err) {
      setMessage('❌ Something went wrong.');
      console.error('Cover letter generation failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {['name', 'experience', 'resume_text', 'job_description', 'company', 'job_title'].map((field) => (
        <div key={field}>
          <label htmlFor={field} className="block font-medium capitalize">
            {field.replace('_', ' ')}
          </label>
          <textarea
            id={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            rows={3}
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Generating...' : 'Generate Cover Letter'}
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
