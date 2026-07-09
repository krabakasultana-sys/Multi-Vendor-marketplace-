import { useState } from 'react';

export const RatingModal = ({ onClose }) => {
  const [feedback, setFeedback] = useState('');
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-7 w-[480px] max-w-[95vw] relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-gray-400 text-lg">✕</button>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-5">Billing Address</h3>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1.5">Rating</label>
          <div className="flex items-center justify-between border border-gray-200 rounded px-3 py-2.5 cursor-pointer">
            <span className="text-sm"><span className="text-yellow-400">★★★★★</span> 5 Star Rating</span>
            <span className="text-gray-400">▾</span>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-xs text-gray-500 mb-1.5">Feedback</label>
          <textarea
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none resize-y min-h-[100px]"
            placeholder="Write down your feedback about our product & services"
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
          />
        </div>
        <button onClick={onClose} className="bg-orange-500 hover:bg-orange-600 text-white border-none px-6 py-3 rounded text-xs font-bold uppercase tracking-widest cursor-pointer">
          Publish Review
        </button>
      </div>
    </div>
  );
};

export const AddCardModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
    <div className="bg-white rounded-lg p-7 w-96 max-w-[95vw] relative" onClick={e => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-gray-400 text-lg">✕</button>
      <h3 className="text-sm font-bold uppercase tracking-widest mb-5">Add New Card</h3>
      {[
        { label: 'Name on Card', placeholder: '' },
        { label: 'Card Number',  placeholder: '' },
      ].map(f => (
        <div key={f.label} className="mb-3">
          <label className="block text-xs text-gray-500 mb-1.5">{f.label}</label>
          <input className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-orange-400" />
        </div>
      ))}
      <div className="flex gap-3 mb-5">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1.5">Expire Date</label>
          <input className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-orange-400" />
        </div>
        <div className="w-24">
          <label className="block text-xs text-gray-500 mb-1.5">CVC</label>
          <input className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-orange-400" />
        </div>
      </div>
      <button onClick={onClose} className="bg-orange-500 hover:bg-orange-600 text-white border-none px-6 py-3 rounded text-xs font-bold uppercase tracking-widest cursor-pointer">
        Add Card
      </button>
    </div>
  </div>
);
