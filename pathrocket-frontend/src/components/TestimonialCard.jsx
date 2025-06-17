const TestimonialCard = ({ quote, name, role }) => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg text-black w-full max-w-sm">
      <p className="text-base mb-2 italic">"{quote}"</p>
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};

export default TestimonialCard;
